(function() {
	'use strict';

	var gulp = require('gulp');
	var sass = require('gulp-sass');
	var plumber = require('gulp-plumber');
	var rename = require('gulp-rename');
	var gutil = require('gulp-util');
	var sourcemaps = require('gulp-sourcemaps');
	var postcss = require('gulp-postcss');
	var autoprefixer = require('autoprefixer');
	var cssnano = require('cssnano');
	var gulpStylelint = require('gulp-stylelint');
	var livereload = require('gulp-livereload');
	var kss = require('kss');
	var uglify = require('gulp-uglify');
	var pump = require('pump');
	var modernizr = require('gulp-modernizr');
	var cssdeclsort = require('css-declaration-sorter');
	var browserify = require('browserify');
	var tap = require('gulp-tap');
	var buffer = require('gulp-buffer');
	var atImport = require('postcss-import');
	var svgmin = require('gulp-svgmin');
	var svgstore = require('gulp-svgstore');

	var onError = function(err) {
		// eslint-disable-next-line no-console
		console.log('An error ocurred: ', gutil.colors.magenta(err.message));
		gutil.beep();
		this.emit('end');
	}

	function notifyLiveReload(event) {
		var fileName = require('path').relative(__dirname, event.path);
		livereload.changed(fileName);
	}

	gulp.task('js-dev', function() {
		return gulp.src('js/src/main.js', {read: false}) // browserify reads file
			.pipe(tap(function(file) {
				file.contents = browserify(file.path, {debug:true}).bundle();
			}))
			.pipe( buffer() )
			.pipe(rename('diagram.dev.js'))
			.pipe(gulp.dest('./js'))
			.pipe(livereload())
	});

	gulp.task('js-prod', function() {
		return gulp.src('js/src/main.js', {read: false}) // browserify reads file
			.pipe(tap(function(file) {
				file.contents = browserify(file.path).bundle();
			}))
			.pipe(buffer())
			.pipe(uglify())
			.pipe(rename('diagram.prod.js'))
			.pipe(gulp.dest('./js'))
	});

	gulp.task('sass-site-dev', ['lint-sass'], function() {
		var processors = [
			autoprefixer({browsers: ['last 2 versions']}),
			atImport(),
			cssdeclsort({order: 'alphabetically'}),
		];
		return gulp.src('./sass/main.scss')
			.pipe(plumber({errorHandler: onError}))
			.pipe(sourcemaps.init())
			.pipe(sass({ outputStyle: 'nested' }))
			.pipe(postcss(processors))
			.pipe(sourcemaps.write())
			.pipe(rename("diagram.dev.css"))
			.pipe(gulp.dest('./css/'))
			.pipe(livereload())
	});

	gulp.task('sass-site-prod', ['lint-sass'], function() {
		var processors = [
			autoprefixer({stats: ['> 1%']}),
			atImport(),
			cssdeclsort({order: 'alphabetically'}),
			cssnano(),
		];
		return gulp.src('./sass/main.scss')
			.pipe(plumber({errorHandler: onError}))
			.pipe(sourcemaps.init())
			.pipe(sass({ outputStyle: 'nested' }))
			.pipe(postcss(processors))
			.pipe(rename("diagram.prod.css"))
			.pipe(gulp.dest('./css/'))
	});


	gulp.task('sass-editor', ['lint-sass'], function() {
		var processors = [
			autoprefixer({browsers: ['last 2 versions']}),
		];
		return gulp.src('./sass/wp-editor-style.scss')
			.pipe(plumber({errorHandler: onError}))
			.pipe(sass({ outputStyle: 'nested' }))
			.pipe(postcss(processors))
			.pipe(gulp.dest('./css/'))
	});

	gulp.task('sass-admin', ['lint-sass'], function() {
		var processors = [
			autoprefixer({browsers: ['last 2 versions']}),
		];
		return gulp.src('./sass/wp-admin-styles.scss')
			.pipe(plumber({errorHandler: onError}))
			.pipe(sass({ outputStyle: 'nested' }))
			.pipe(postcss(processors))
			.pipe(gulp.dest('./css/'))
	});

	gulp.task('sass-styleguide', function() {
		var processors = [
			autoprefixer({stats: ['> 1%']})
		];
		return gulp.src('./sass/styleguide.scss')
			.pipe(plumber({errorHandler: onError}))
			.pipe(sass({ outputStyle: 'nested' }))
			.pipe(postcss(processors))
			.pipe(gulp.dest('./styleguide/'))
	});

	gulp.task('generate-styleguide', ['sass-styleguide'], function() {
		return kss({
			source: 'sass',
			destination: 'styleguide',
			css: 'styleguide.css',
			builder: 'styleguide-theme',
			title: 'EPIC 2017',
			custom: [ 'Status' ]
		});
	});

	gulp.task('lint-sass', function() {
		return gulp.src(['sass/**/*.scss', '!sass/abstracts/_sprites.scss'])
			.pipe(plumber({errorHandler: function() { gutil.beep(); }}))
			.pipe(gulpStylelint({
				reporters: [
					{formatter: 'string', console: true}
				]
			}));
	});

	gulp.task('watch', ['sass', 'js'], function() {
		livereload.listen();
		gulp.watch('sass/**/*.scss', ['sass']);
		gulp.watch('sass/**/*.sass', ['sass']);
		gulp.watch('**/*.php', notifyLiveReload);
		gulp.watch('js/src/*.js', ['js']);
	});

	gulp.task('uglify', function(cb) {
		pump(
			[
				gulp.src('js/libs/loadcss.js'),
				uglify(),
				rename('loadcss.min.js'),
				gulp.dest('js/libs/'),
			],
			cb
		);
	});

	var modernizr_config = {
		classPrefix: 'html--',
		options: [
			'setClasses',
			'prefixed'
		]
	};
	gulp.task('modernizr', function(cb) {
		pump(
			[
				gulp.src('js/*.js'),
				modernizr('modernizr-build.min.js', modernizr_config),
				uglify(),
				gulp.dest('js/libs/')
			],
			cb
		);
	});

	gulp.task('svgstore', function() {
		return gulp
			.src('svg/*.svg')
			.pipe(svgmin())
			.pipe(svgstore())
			.pipe(rename('sprite.svg'))
			.pipe(gulp.dest('includes/'))
		;
	});

	gulp.task('sass-site', ['sass-site-dev', 'sass-site-prod']);
	gulp.task('sass', [ 'sass-site', 'sass-editor', 'sass-admin' ]);
	gulp.task('js', [ 'js-dev', 'js-prod' ]);
	gulp.task('default', ['sass', 'js']);
}());
