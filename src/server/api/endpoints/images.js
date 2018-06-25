import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

import {
  Numbers
} from '../../../shared/utils';

export default async (req,res,next) => {
  // console.log(req.params);
  function getDirectoryImages(directoryName,imageList){
    var testDirectory = path.join(`imgs/${directoryName}`);
    if(fs.lstatSync(testDirectory).isDirectory()){
      var images = fs.readdirSync(testDirectory);
      images.forEach((image) => {
        if(!/(\.DS_Store|thumb|placeholder)/.test(image)){ imageList.push(`${directoryName}/${image}`); }
      })
    }
  }


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
  } else if (req.params.folder && !req.params.image){
    if(/random/.test(req.params.folder)){
      let imageList = [];
      let folders = await fs.readdirSync(path.join('imgs'));

      folders.forEach((folder) => { getDirectoryImages(folder,imageList); });
      res.sendFile(`imgs/${imageList[Numbers.getRandomNumber(imageList.length-1,0)]}`, {root:'.'});
    }
    else if(fs.existsSync(path.join(`imgs/${req.params.folder}`))){
      // console.log('it exists please do something');
      let imageList = [];
      getDirectoryImages(`${req.params.folder}`,imageList);
      res.send(JSON.stringify(imageList));
    }
    else if(/^portrait\/?$/.test(req.params.folder)){
      // console.log('you are specifically asking for the portrait url')
      res.sendFile(`imgs/portrait.jpg`, {root:'.'});
    } else {
      res.redirect('/')
    }
  } else {
    let imageList = [];
    let folders = await fs.readdirSync(path.join('imgs'));

    folders.forEach((folder) => { getDirectoryImages(folder,imageList); });
    res.send(JSON.stringify(imageList));
  }
}
