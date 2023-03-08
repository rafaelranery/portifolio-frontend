const gulp = require('gulp');
/* Plugins for sass */
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');


function compileSass() {
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

exports.compileSass = compileSass;

exports.default = function() {
    gulp.watch('./source/styles/main.scss', {ignoreInitial: false}, compileSass);
}