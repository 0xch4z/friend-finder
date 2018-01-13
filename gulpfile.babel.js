import gulp from 'gulp'
import babel from 'gulp-babel'
import postcss from 'gulp-postcss'
import cssnext from 'postcss-cssnext'
import cssimport from 'postcss-import'
import precss from 'precss'
import minifycss from 'gulp-minify-css'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'

const paths = {
  scripts: {
    in: './client/scripts',
    out: './static/scripts',
  },
  styles: {
    in: './client/styles',
    out: './static/styles',
  },
}

const cssProcessors = [
  cssimport,
  precss,        
  postcss,
  cssnext,
]

gulp.task('dev:styles', () => (
  gulp.src(`${paths.styles.in}/main.css`)
    .pipe(postcss(cssProcessors))
    .pipe(concat('style.css'))  
    .pipe(gulp.dest(paths.styles.out))
))

gulp.task('dev:scripts', () => (
  gulp.src(`${paths.scripts.in}/*.js`)
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest(paths.scripts.out))
))

gulp.task('prod:styles', () => (
  gulp.src(`${paths.styles.in}/main.css`)
    .pipe(postcss(cssProcessors))
    .pipe(minifycss())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(paths.styles.out))
))

gulp.task('prod:scripts', () => (
  gulp.src(`${paths.scripts.in}/*.js`)
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.out))
))

gulp.task('watch', () => {
  gulp.watch(`${paths.scripts.in}/*.js`, ['dev:scripts'])
  gulp.watch(`${paths.styles.in}/*.css`, ['dev:styles'])
})

gulp.task('dev', ['watch', 'dev:scripts', 'dev:styles'])
gulp.task('prod', ['prod:scripts', 'prod:styles'])
