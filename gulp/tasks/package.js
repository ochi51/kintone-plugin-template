var gulp   = require('gulp');
var run    = require('gulp-run');
var config = require('../config');

gulp.task('package', function () {
  run('sh ./package.sh ' + config.pluginDir + ' ' + config.pluginKey).exec();
});