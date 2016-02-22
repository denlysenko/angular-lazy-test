/*eslint-disable */
'use strict';
/*eslint-enable */

const htmlhint = require('gulp-htmlhint');

module.exports = (gulp, config) => {
    gulp.task('htmlhint', () => {
        return gulp
            .src(config.paths.html)
            .pipe(htmlhint('.htmlhintrc'))
            .pipe(htmlhint.reporter());
    });
};
