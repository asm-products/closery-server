var yaml = require('gulp-yaml');

var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('./swagger/v2.0/closery.yaml')
    .pipe(yaml({ pretty: true }))
    .pipe(gulp.dest('./swagger/v2.0'));
});
