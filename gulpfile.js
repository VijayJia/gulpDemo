var gulp = require('gulp');

gulp.task('moveFile1', function() {
  gulp.src('client/js/**/*.js')
  .pipe(gulp.dest('build'));
});

gulp.task('moveFile2', function() {
  gulp.src('client/js/**/*.js', {buffer: true, read: true, base: 'client'})
  .pipe(gulp.dest('build1'));
});

gulp.task('moveFile3', function(cb) {
  setTimeout(function() {
    console.log('wait ');
    cb();
  }, 1);
});

gulp.task('watchFile', function(cb) {
  var watcher = gulp.watch('client/js/**/*.js', ['reload']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('reload', function(cb) {
  gulp.src('client/js/**/*.js')
  .pipe(gulp.dest('build3'));
  cb();
});

gulp.task('default', ['watchFile', 'moveFile1', 'moveFile2', 'moveFile3'], function(cb) {
  // place code for your default task here
  cb();
});