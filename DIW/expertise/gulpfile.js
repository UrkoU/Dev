const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass(done) {
  src("src/styles/*.sass").pipe(sass().on("error", sass.logError)).pipe(dest("dist/css"));
  done();
}

exports.compileSass = compileSass;
