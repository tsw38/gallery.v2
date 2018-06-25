export default async (req,res,next) => {
    // const mysql_conn = mysql.createConnection({
    //   host:process.env.DB_HOST,
    //   user:process.env.DB_USER,
    //   password:process.env.DB_PASS,
    //   database:process.env.DB_NAME
    // });
    //
    // mysql_conn.query('SELECT * FROM photostream ORDER BY timestamp DESC;', function(err,rows){
    //   var results = [];
    //   if(err){
    //     if(/ER_PARSE_ERROR/.test(err.code)){ res.sendStatus(409); }
    //   } else {
    //     rows.forEach(function(payload, index){
    //       var {url, album} = payload;
    //       results.push({url,album});
    //     });
    //     results = JSON.stringify(results);
    //     res.json(results);
    //   }
    // });
    res.send('archive');
  }
