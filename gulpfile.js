const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  sourcemap = require('gulp-sourcemaps');

const ENV = process.argv.indexOf('-dev') > -1 ? 'DEV' : 'PROD';

const PATH = {
	SASS: {
		SOURCE: './sass/**/*.sass',
		DEST: './css'
	}
}

gulp.task('sass-dev', () => {
	return gulp.src(PATH.SASS.SOURCE) 
			.pipe(sourcemap.init())
			.pipe(sass({ outputStyle: 'nested' }))
			.pipe(sourcemap.write())
			.pipe(gulp.dest(PATH.SASS.DEST));
})

gulp.task('sass-prod', () => {
	return gulp.src(PATH.SASS.SOURCE) 
			.pipe(sass({ outputStyle: 'compressed' }))
			.pipe(gulp.dest(PATH.SASS.DEST));
})
