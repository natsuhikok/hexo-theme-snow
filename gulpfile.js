const gulp = require('gulp');
/////////////////////////////////////////
// Browser-sync
/////////////////////////////////////////
const browsersync = require('browser-sync');
gulp.task('server', () => {
  browsersync({
    files: "layout/**",
    browser: 'FirefoxDeveloperEdition',
    proxy: "localhost:4000"
  });
});