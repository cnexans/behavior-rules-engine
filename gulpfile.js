const gulp = require('gulp');
const ts = require('gulp-typescript');
const { readFileSync } = require('fs');

const loadJSON = (file) => {
  const filePath = `${__dirname}/${file}`;
  return JSON.parse(readFileSync(filePath));
}

const buildApleParserScope = () => {
  const { compilerOptions } = loadJSON('tsconfig.json');

  return gulp.src('./src/aple-parser-scope/**/*')
    .pipe(ts(compilerOptions))
    .pipe(gulp.dest('build/aple-parser-scope'))
};

const buildApleInterpreter = () => {
  const { compilerOptions } = loadJSON('tsconfig.json');

  return gulp.src('./src/aple-interpreter/**/*')
    .pipe(ts(compilerOptions))
    .pipe(gulp.dest('build/aple-interpreter'))
};

const buildApleParser = () => {
  const compileParser = require('./src/compile-aple-parser/')
  const outFile = './build/aple-parser.js';
  compileParser(outFile);

  return Promise.resolve();
};

const build = gulp.series(gulp.parallel(
  buildApleParserScope,
  buildApleInterpreter,
  buildApleParser
));

module.exports = {
  build
};