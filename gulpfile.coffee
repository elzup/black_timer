gulp = require 'gulp'
gutil = require 'gulp-util'
stylus = require 'gulp-stylus'
koutoSwiss = require 'kouto-swiss'
autoprefixer = require 'gulp-autoprefixer'

$ = require('gulp-load-plugins')()

# config
# src_dir = './src'
# public_dir = './public'

# NOTE: watch は ./ から始めると新規ファイルを読み込まない
# NOTE: /**/*.ext 再帰的マッチ
# config:
#    source: './source/path'
#    watch: 'source/path/*.ext'
#    destination: './output/path'
config =
  jade:
    source: './src/jade'
    watch: 'src/jade/*.jade'
    destination: './'
    config:
      pretty: true
  coffee:
    source: './src/coffee'
    watch: 'src/coffee/**/*.coffee'
    destination: './js/'
    option:
      bare: true
  app_coffee:
    source: './app.coffee'
    watch: './app.coffee'
    destination: './'
    option:
      bare: true
  stylus:
    source: './src/stylus'
    watch: 'src/stylus/**/*.styl'
    destination: './css/'
  sass:
    source: './src/sass'
    watch: './src/sass/**/*.sass'
    destination: './public/css'
# error handle
handleError = (err) ->
  gutil.log err
  gutil.beep()
  this.emit 'end'

# tasks
# tasks jade
gulp.task 'jade', ->
  gulp
    .src config.jade.watch
    .pipe $.jade(
      config.jade.option
    )
    .on 'error', handleError
    .pipe gulp.dest config.jade.destination

# tasks coffee
gulp.task 'coffee', ->
  gulp
    .src config.coffee.watch
    .pipe $.coffee()
    .on 'error', handleError
    .pipe gulp.dest config.coffee.destination

gulp.task 'app_coffee', ->
  gulp
  .src config.app_coffee.watch
  .pipe $.coffee()
  .on 'error', handleError
  .pipe gulp.dest config.app_coffee.destination

# tasks stylus
gulp.task "stylus", ->
  gulp
    .src config.stylus.watch
    .pipe $.sourcemaps.init()
    .pipe stylus
      compress: true
      use: koutoSwiss()
    .pipe autoprefixer
      browsers: ['last 2 versions']
    .pipe $.sourcemaps.write('.')
    .on 'error', handleError
    .pipe gulp.dest config.stylus.destination

# tasks sass
gulp.task "sass", ->
  gulp
  .src config.sass.watch
  .pipe $.sourcemaps.init()
  .pipe $.sass
    compress: true
  .pipe $.autoprefixer
    browsers: ['last 2 versions']
  .pipe $.sourcemaps.write('.')
  .on 'error', handleError
  .pipe gulp.dest config.sass.destination

# watch
gulp.task 'watch', ->
  gulp.watch config.coffee.watch, ['coffee']
  gulp.watch config.stylus.watch, ['stylus']
  gulp.watch config.jade.watch, ['jade']
  # gulp.watch config.sass.watch, ['sass']

#load
gulp.task 'default', ["coffee", "stylus", "jade"]
