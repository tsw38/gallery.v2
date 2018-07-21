import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import mysql from 'mysql';

import { Numbers, ObjectUtil } from '../../../shared/utils';

const getDirectoryImages = (directoryName,imageList) => {
  var testDirectory = path.join(`imgs/${directoryName}`);
  if(fs.lstatSync(testDirectory).isDirectory()){
    var images = fs.readdirSync(testDirectory);
    images.forEach((image) => {
      if(!/(\.DS_Store|thumb|placeholder)/.test(image)){ imageList.push(`${directoryName}/${image}`); }
    })
  }
}

export default async (req,res,next) => {
  // if asking for a specific image
  if(req.params.folder && req.params.image){
    fs.stat(path.join(`imgs/${req.params.folder}/${req.params.image}`), (err, stat) => {
      if(err == null) {

        res.sendFile(`imgs/${req.params.folder}/${req.params.image}`,{root:'.'});
      } else if(err.code == 'ENOENT') {
        res.sendFile(`imgs/${process.env.GENERIC_404_IMAGE}`, {root:'.'});
      } else {
        res.send('ERROR');
        console.error('error code: ', err.code);
      }
    });
  }
  // if requesting just the folder
  else if (req.params.folder && !req.params.image){
    if(/random/.test(req.params.folder)){
      let imageList = [];
      let folders = await fs.readdirSync(path.join('imgs'));

      folders.forEach((folder) => { getDirectoryImages(folder,imageList); });
      res.sendFile(`imgs/${imageList[Numbers.getRandomNumber(imageList.length-1,0)]}`, {root:'.'});
    }
    else if(/^portrait\/?$/.test(req.params.folder)){
      res.sendFile(`imgs/portrait.jpg`, {root:'.'});
    }
    else if(fs.existsSync(path.join(`imgs/${req.params.folder}`))){
      // console.log('it exists please do something');
      let imageList = [];
      getDirectoryImages(`${req.params.folder}`,imageList);
      res.send(JSON.stringify(imageList));
    } else {
      res.redirect('/')
    }
  } else {
    const mysql_conn = mysql.createConnection({
      host:process.env.DB_HOST,
      user:process.env.DB_USER,
      password:process.env.DB_PASS,
      database:process.env.DB_NAME,
      typeCast: function castField( field, useDefaultTypeCasting ) {
        if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {
          let bytes = field.buffer();
          return( bytes[ 0 ] === 1 );
        }
        return( useDefaultTypeCasting() );
      }
    });

    mysql_conn.query(
      `SELECT
        photoName,
        timestamp,
        photoID,
        albumName,
        background,
        url as 'albumUrl'
      FROM
        photos, albums
      WHERE
        photos.albumID = albums.id
        ${ObjectUtil.deepFind(req.query, 'backgrounds') ? 'AND background=1' : ''}
      ORDER BY
        timestamp DESC;`, (err,rows) => {
      if(err){
        if(/ER_PARSE_ERROR/.test(err.code)){ res.sendStatus(409); }
      } else {
        res.json(rows);
      }
    });
  }
}
