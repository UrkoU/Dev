const url = "https://localhost:5001/api/Meteorologia/";

function GetBalizas() {
  return $.ajax({
    type: "GET",
    dataType: "html",
    url: url,
    headers: {
      accept: "application/json",
    },
  }).fail(function (err) {
    console.log("ERROR: " + err);
  });
}

function GetTiempo(id = "C080") {
  return $.ajax({
    type: "GET",
    dataType: "html",
    url: url + id,
    headers: {
      accept: "application/json",
    },
  }).fail(function (err) {
    console.log("ERROR: " + err);
  });
}
