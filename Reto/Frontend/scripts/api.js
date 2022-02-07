const url = "http://10.10.17.164/api/"; // docker plaiaundi
// const url = "http://localhost/api/"; // docker home
// const url = "https://localhost:5001/api/"; // local
let sToken = "";

/**
 * Llamadas a la api. Tienen el mismo nombre que los métodos en TiempoApi
 */

function GetBalizas() {
  return $.ajax({
    type: "GET",
    dataType: "html",
    url: url + "Meteorologia/",
    headers: {
      accept: "application/json",
      authorization: "Bearer " + sToken,
    },
  }).fail(function (err) {
    console.log("ERROR: " + err);
  });
}

function GetTiempo(id = "C080") {
  return $.ajax({
    type: "GET",
    dataType: "html",
    url: url + "Meteorologia/" + id,
    headers: {
      accept: "application/json",
      authorization: "Bearer " + sToken,
    },
  }).fail(function (err) {
    console.log("ERROR: " + err);
  });
}

function GetOpcionesUsuario(id = 1) {
  return $.ajax({
    type: "GET",
    dataType: "html",
    url: url + "OpcionesUsuario/" + id,
    headers: {
      accept: "application/json",
      authorization: "Bearer " + sToken,
    },
  }).fail(function (err) {
    console.log("ERROR: " + err);
  });
}

function PutOpcionesUsuario(id = 1, opciones) {
  $.ajax({
    type: "PUT",
    url: url + "OpcionesUsuario/" + id,
    data: JSON.stringify(opciones),
    contentType: "application/json",
    headers: {
      authorization: "Bearer " + sToken,
    },
  }).fail(function (err) {
    console.log("ERROR: " + err);
  });
}

function DeleteOpcionUsuario(id, codigo) {
  $.ajax({
    type: "DELETE",
    url: url + "OpcionesUsuario/" + id + "/" + codigo,
    contentType: "application/json",
    headers: {
      authorization: "Bearer " + sToken,
    },
  }).fail(function (err) {
    console.log("ERROR: " + err);
  });
}

// Login == api/users/authenticate

function LoginApi(user = "Deagle50", pass = "pass") {
  return $.ajax({
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    url: url + "Users/authenticate",
    data: JSON.stringify({
      username: user,
      password: pass,
    }),
    headers: {
      accept: "application/json",
      dataType: "json",
      contentType: "application/json",
    },
  }).fail(function (err) {
    if (err.status == 400) console.log(err.status);
    else console.log("Problema de conexión");
  });
}
