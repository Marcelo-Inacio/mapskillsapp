'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var browserSyncSpa = require("browser-sync-spa");


browserSync.use(browserSyncSpa({
    selector: "[ng-app]" // Only needed for angular apps
}));

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'web_app/'
    }
  });
  gulp.watch('web_app/**/*.html').on('change', browserSync.reload);
});

gulp.task('watch', ['serve'], function (){
  // gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('web_app/**/*.html', browserSync.reload);
  gulp.watch('web_app/**/*.js', browserSync.reload);
});
