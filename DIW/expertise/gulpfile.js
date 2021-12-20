const { series, parallel, src, dest } = require("gulp");

function holamundo(cb) {
  console.log("Hola mundo");
  cb();
}

function adiosmundo(cb) {
  console.log("Adiós mundo");
  cb();
}

function pipeline() {
  return src("css/*.css").pipe(dest("dist/"));
}

exports.holamundo = holamundo;
exports.adiosmundo = adiosmundo;
exports.pipeline = pipeline;
exports.default = series(adiosmundo, holamundo);
