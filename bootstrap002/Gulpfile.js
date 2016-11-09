var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('custom', function () {
  return gulp.src('src/sass/**/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['custom'], function (){
  gulp.watch('src/sass/**/*.scss',['custom']);
});



