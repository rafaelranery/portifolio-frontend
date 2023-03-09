const gulp = require('gulp');
/* Plugins for sass */
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
/* Plugins for Js compiling */
const uglify = require('gulp-uglify');
/* Plugins for Image Compress */
const imageMin = require('gulp-imagemin');

function compileSass() {
    return gulp.src('./source/styles/main.scss')
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

function compressImg() {
    return gulp.src('./source/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./build/img'))
}

exports.compileSass = compileSass;
exports.compileJs = compileJs;
exports.compressImg = compressImg;


exports.default = function() {
    gulp.watch('./source/styles/**/*.scss', {ignoreInitial: false}, compileSass);
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, compileJs);
    gulp.watch('./source/img/*', {ignoreInitial: false}, compressImg);
}