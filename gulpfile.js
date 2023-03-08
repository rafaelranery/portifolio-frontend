const gulp = require('gulp');
/* Plugins for sass */
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
/* Plugins for Js compiling */
const uglify = require('gulp-uglify');

function compileSass() {
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function compileJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.compileSass = compileSass;
exports.compileJs = compileJs;


exports.default = function() {
    gulp.watch('./source/styles/main.scss', {ignoreInitial: false}, compileSass);
}