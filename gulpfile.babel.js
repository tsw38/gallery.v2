import gulp from 'gulp';
import shell from 'gulp-shell';
import dotenv from 'dotenv';

dotenv.config();

gulp.task('dev:watch', shell.task(`nodemon --exec node ./build/${process.env.VERSION_NUMBER}/server/server.js`));
