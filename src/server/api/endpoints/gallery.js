import mysql from 'mysql';

export default async (req,res,next) => {
    const mysql_conn = mysql.createConnection({
      host:process.env.DB_HOST,
      user:process.env.DB_USER,
      password:process.env.DB_PASS,
      database:process.env.DB_NAME
    });

    mysql_conn.query(
      `SELECT
        albumName,
        url,
        photoName,
        CASE WHEN thumbnailID = photoID THEN true ELSE false END as 'isThumbnail'
      FROM
        photos AS P
        JOIN albums AS A on P.albumID = A.id
      WHERE A.url="${req.params.gallery}" ORDER BY timestamp desc;`, (err,rows) => {
      if(err){
        if(/ER_PARSE_ERROR/.test(err.code)){ res.sendStatus(409); }
      } else {
        res.json(rows);
      }
    });
  }
