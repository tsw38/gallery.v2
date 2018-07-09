import mysql from 'mysql';

export default async (req,res,next) => {
    const mysql_conn = mysql.createConnection({
      host:process.env.DB_HOST,
      user:process.env.DB_USER,
      password:process.env.DB_PASS,
      database:process.env.DB_NAME
    });

    mysql_conn.query('SELECT albumName, url, photoName FROM photos RIGHT JOIN albums on photos.photoID = albums.thumbnailID ORDER BY photos.timestamp desc;', (err,rows) => {
      var results = [];
      if(err){
        if(/ER_PARSE_ERROR/.test(err.code)){ res.sendStatus(409); }
      } else {
        rows.forEach((payload, index) => {
          results.push(payload);
        });
        res.json(results);
      }
    });
  }
