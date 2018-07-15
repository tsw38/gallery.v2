import mysql from 'mysql';

export default async (req,res,next) => {
    const mysql_conn = mysql.createConnection({
      host:process.env.DB_HOST,
      user:process.env.DB_USER,
      password:process.env.DB_PASS,
      database:process.env.DB_NAME
    });

    mysql_conn.query(`
      SELECT
        A.albumName,
        A.url,
        T.photoName
      FROM
        albums as A
        LEFT JOIN photos AS P ON A.id = P.albumId
        LEFT JOIN photos AS T ON A.thumbnailId = T.photoId
      GROUP BY
        A.albumName,
        A.url,
        T.photoName
      ORDER BY
        max(P.timestamp) DESC;`, (err,rows) => {
      if(err){
        if(/ER_PARSE_ERROR/.test(err.code)){ res.sendStatus(409); }
      } else {
        res.json(rows);
      }
    });
  }
