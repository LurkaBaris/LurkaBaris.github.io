//utils
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const imgCompress  = require('imagemin-jpeg-recompress');

//css
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

//babel + browserify
const babel = require('gulp-babel');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');


gulp.task('default', ['sass', 'babel'], () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['babel']);
});

gulp.task('sass', () => {
    const plugins = [autoprefixer({browsers: ['last 2 versions']}), cssnano()];
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});


gulp.task('babel', function() {
    browserify({
        entries: './src/js/main.js',
        debug: true
    })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .on('error',gutil.log)
    .bundle()
    .on('error',gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

exports.default  = () => (
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipi(gulp.dest('./dist/img'))
)

    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))

// Optimize images
gulp.task('img', function() {
    return gulp.src('./src/img/*')
        .pipe(imagemin([
            imgCompress({
                loops: 4,
                min: 60,
                max: 80,
                quality: 'high'
            }),
            imagemin.gifsicle(),
            imagemin.optipng(),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('dist/img'));
});