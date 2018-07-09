const fs = require('fs');
const path = require('path');

let order = 'desc';
let json = JSON.parse(fs.readFileSync(`./data.json`, 'utf8'));
let orderedImages = [];
var finalString = '';
for(let year of Object.keys(json).sort((a,b) => (order === 'asc') ? a-b : b-a)){
  // let interim = [];
  for(var album of Object.keys(json[year])){
    for(var ind = 0; ind < json[year][album].length; ind++){
      var image = json[year][album][ind];
      var sql = "INSERT INTO photostream (album,url,timestamp) VALUES ('"+album+"','"+image+"','"+year+"-"+(('0'+(ind+1)).slice(-2))+"-"+(('0'+(ind+1)).slice(-2))+"');";
      finalString += sql;
    }
    // console.log(album);
    // interim.push({album,"images":json[year][album]});
  }
  // console.log(interim);
}

console.log(finalString);
