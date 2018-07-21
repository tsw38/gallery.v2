import mysql from 'mysql';

export default async (req,res,next) => {
  const mysql_conn = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
  });

  mysql_conn.query(`
    UPDATE
      photos
    SET
      background=${parseInt(req.body.updatedState, 10)}
    WHERE
      photoID=${parseInt(req.body.photoID, 10)};`, (err,rows) => {
    if(err){
      if(/ER_PARSE_ERROR/.test(err.code)){ res.sendStatus(409); }
    } else {
      res.json({
        status: 200
      });
    }
  });
}
