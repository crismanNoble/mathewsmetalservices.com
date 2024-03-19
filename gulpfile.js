//npm install --save gulp gulp-sass sass gulp-autoprefixer@8 gulp-cssmin

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
 
gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', gulp.series('sass', function (done) {
  gulp.watch('./src/*.scss', gulp.series('sass'));
  done();
}));


gulp.task('watch',gulp.parallel('sass:watch', function(done){
  done();
}));

gulp.task('default', gulp.series('watch', function(done) {    
  done();
}));