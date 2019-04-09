const gulp = require('gulp');
const shell = require('gulp-shell');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const package = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json'), 'utf-8'));

gulp.task('server', shell.task(`nodemon --exec node ./dist/${package.version}/server/server.bundle.js`));
