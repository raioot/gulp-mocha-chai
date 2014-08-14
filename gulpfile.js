var gulp = require('gulp'),
  mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('test', function () {
  return gulp
  .src('test/runner.html')
  .pipe(mochaPhantomJS());
});

gulp.task('default', ['test']);