/**
 * npm init
 * npm install alert
 * npm install readline-sync
 * node node.js
 */
const http = require("http");
const os = require("os");
var readlineSync = require("readline-sync");
var alert = require("alert");

const hostname = "0.0.0.0";
const port = process.argv[2] || 3000;

console.log("Hola soy JS corriendo en el servidor");
let no = ["HTML", "CSS"];
no.forEach(function (elemento, indice, array) {
  console.log("Hola NO tengo " + elemento);
});

console.log("y por lo tanto");
let si = ["http", "fs"];
no.forEach(function (elemento, indice, array) {
  console.log("Si tengo " + elemento);
});

function saludar(nombre) {
  alert("Hola desde un callback " + nombre.toUpperCase());
}

function procesarEntradaUsuario(callback) {
  var nombre = readlineSync.question("Por favor indica tu nombre: ");
  callback(nombre);
}

procesarEntradaUsuario(saludar);
