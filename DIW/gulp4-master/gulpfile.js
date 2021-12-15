// Gulp and base stuff
import gulp from 'gulp';
import concat from 'gulp-concat';
import del from 'del';
import zip from 'gulp-zip';

// CSS plugins
import sass from 'sass';
import gulpSass from 'gulp-sass';
const gSass = () => gulpSass(sass)()
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';

// JavaScript plugins
import uglify from 'gulp-uglify';

// Images plugins
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';

// BrowserSync
import {create as bsCreate} from 'browser-sync';
const browserSync = bsCreate();

// Paths
const paths = {
	srcDir: './src',
	devDir: './dev',
	buildDir: './build'
};

// clean 'dev' folder
function cleanDev(cb) {
	return del(paths.devDir).then(() => {
		cb();
	});
}

// clean 'build' folder
function cleanBuild(cb) {
	return del(paths.buildDir).then(() => {
		cb();
	});
}

// Zip build folder
function zipBuild() {
	return gulp.src(paths.buildDir + '/**/*.*')
		.pipe(zip('build.zip'))
		.pipe(gulp.dest(paths.buildDir));
}

// compile SASS to CSS and paste into dev folder
function sassDev() {
	const vendorsCssList = [
		'./node_modules/normalize.css/normalize.css'
	];

	return gulp.src(vendorsCssList)
		.pipe(gulp.src(paths.srcDir + '/scss/main.scss'))
		.pipe(gSass())
		.pipe(autoprefixer({cascade: false}))
		.pipe(concat('style.css'))
		.pipe(gulp.dest(paths.devDir  + '/css'))
		.pipe(browserSync.stream());
}

function cssBuild() {
	return gulp.src( paths.devDir + '/css/*.css')
		.pipe(csso({
			restructure: false,
			sourceMap: false,
			debug: true
		}))
		.pipe(gulp.dest(paths.buildDir + '/css'));
}

// copy HTML files into 'dev' folder
function htmlDev() {
	return gulp.src(paths.srcDir + '/*.html')
		.pipe(gulp.dest(paths.devDir));
}

function htmlBuild() {
	return gulp.src(paths.devDir + '/*.html')
		.pipe(gulp.dest(paths.buildDir));
}

function imagesDev() {
	return gulp.src(paths.srcDir + '/images/**/*.*')
		.pipe(gulp.dest(paths.devDir + '/images'));
}

function imagesBuild() {
	return gulp.src(paths.srcDir + '/images/**/*.*')
		.pipe(imagemin([
			gifsicle({interlaced: true}),
			mozjpeg({quality: 75, progressive: true}),
			optipng({optimizationLevel: 5}),
			svgo({
				plugins: [{
					name: 'removeViewBox',
					active: true
				}, {
					name: 'cleanupIDs',
					active: false
				}]
			})
		]))
		.pipe(gulp.dest(paths.buildDir + '/images'));
}

function fontsDev() {
	return gulp.src(paths.srcDir + '/fonts/**/*.*')
		.pipe(gulp.dest(paths.devDir + '/fonts'));
}

function fontsBuild() {
	return gulp.src(paths.srcDir + '/fonts/**/*.*')
		.pipe(gulp.dest(paths.buildDir + '/fonts'));
}

function jsDev() {
	return gulp.src(paths.srcDir + '/js/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.devDir + '/js'));
}

function jsBuild() {
	return gulp.src(paths.devDir + '/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(paths.buildDir + '/js'));
}

function serveDev(done) {
	browserSync.init({
		watch: true,
		server: {
			baseDir: './dev'
		}
	});
	done();
}

function serveBuild(done) {
	browserSync.init({
		server: {
			baseDir: './build'
		}
	});
	done();
}

function watchDev() {
	gulp.watch(paths.srcDir + '/**/*.html', htmlDev);
	gulp.watch(paths.srcDir + '/**/*.+(css|scss|sass)', sassDev);
	gulp.watch(paths.srcDir + '/js/**/*.js', jsDev);
	gulp.watch(paths.srcDir + '/images/**/*.*', imagesDev);
	gulp.watch(paths.srcDir + '/fonts/**/*.*', fontsDev);
}

export default gulp.series(
	cleanDev,
	gulp.parallel(jsDev, fontsDev, htmlDev, sassDev, imagesDev),
	serveDev,
	watchDev
);

export var build = gulp.series(
	cleanBuild,
	gulp.parallel(htmlBuild, cssBuild, jsBuild, imagesBuild, fontsBuild),
	zipBuild
);

export {serveBuild};
