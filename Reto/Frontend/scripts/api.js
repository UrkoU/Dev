const url = "http://10.10.17.164:5000/";
let sToken = "";

function GetBalizas() {
  return $.ajax({
    type: "GET",
    dataType: "html",
    url: url + "api/Meteorologia/",
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
    url: url + "api/Meteorologia/" + id,
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
    url: url + "/api/OpcionesUsuario/" + id,
    headers: {
      accept: "application/json",
      authorization: "Bearer " + sToken,
    },
  }).fail(function (err) {
    console.log("ERROR: " + err);
  });
}

function LoginApi(user, pass) {
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
