// const url = "http://10.10.17.164/api/";
const url = "http://localhost:5000/api/";
let sToken = "";

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
  console.log("sToken");
  console.log(sToken);
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
  console.log("PutOpcionesUsuario" + id);
  return $.ajax({
    type: "PUT",
    dataType: "html",
    url: url + "OpcionesUsuario/" + id,
    headers: {
      accept: "application/json",
      contenttype: "application/json",
      authorization: "Bearer " + sToken,
    },
    data: opciones,
  }).fail(function (err) {
    console.log("ERROR: " + err);
  });
}

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
    console.log("ERROR: " + err);
  });
}
