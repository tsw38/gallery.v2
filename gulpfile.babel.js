import gulp from 'gulp';
import shell from 'gulp-shell';
import dotenv from 'dotenv';

dotenv.config();

gulp.task('dev:watch', shell.task(`nodemon --exec node ./build/${process.env.VERSION_NUMBER}/server/server.js`));

gulp.task('mysqldump', shell.task(`mysqldump -u root -psaxophone1 tylerscott_gallery > tylerscottgallery.sql`));

gulp.task('lazy', shell.task(`gulp mysqldump && git add . && git commit -m "lazy" && git push origin master && git push production master`));
