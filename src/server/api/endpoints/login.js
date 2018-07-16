import jwt from 'jsonwebtoken';
import mysql from 'mysql';
import bcrypt from 'bcryptjs';
import atob from 'atob';

export default async (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    req.token = req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    req.token = req.query.token;
  }
  const token = jwt.sign({...req.body}, req.token);

  jwt.verify(token, process.env.KEY, (err, data) => {
    if(err){
      //this person shouldnt be here
      res.redirect('/');
    } else {
      const mysql_conn = mysql.createConnection({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_NAME
      });

      mysql_conn.query(`
        SELECT
          *
        FROM
          users
        WHERE
          username="${req.body.userName}";`, async (err,rows) => {
        if(err){
          if(/ER_PARSE_ERROR/.test(err.code)){ res.sendStatus(409); }
        } else {
          if(rows){
            console.log(req.body.password);
            console.log(rows[0].password)
            const matched = await bcrypt.compareSync(atob(req.body.password), rows[0].password);

            if(matched){
              const expiration = new Date();
              expiration.setHours(expiration.getHours() + 1);

              res.json({
                success: !!rows,
                accessLevel: rows && rows[0].accessLevel,
                expiration
              })
            } else {
              res.json({
                success: false
              })
            }
          } else {
            res.json({
              success: false
            })
          }
        }
      });
    }
  });
}
