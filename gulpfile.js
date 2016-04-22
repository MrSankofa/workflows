
//bring in the gulp library and assign it to this variable.
//you can now create tasks
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('log', function() {
   gutil.log('Workflows are awesome');
});