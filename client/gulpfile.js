const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/'));
});

gulp.task('bootstrap', function(){
  return gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/'));
});

gulp.task('watch', function(){
  gulp.watch(['./src/*.scss'], ['sass'])
})

