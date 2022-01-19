const url = "https://localhost:5001/api/";
function GetBalizas() {
    return $.ajax({
        type: "GET",
        dataType: "html",
        url: url + "BalizaItem",
        headers: {
            accept: "application/json"
        }
    }).fail(function(err) {
        console.log("ERROR: " + err);
    });
}
function testAjax() {
    return $.ajax({
        url: "https://localhost:5001/api/BalizaItem",
        headers: {
            accept: "application/json"
        }
    });
}
function GetBaliza(id = "C080") {
    let aDatos;
    let Balizas = Promise.resolve($.ajax({
        type: "GET",
        dataType: "html",
        url: url + "BalizaItem/" + id,
        headers: {
            accept: "application/json"
        }
    }).done(function(response) {
        aDatos = JSON.parse(response);
        console.log(aDatos);
    }).fail(function(err) {
        console.log("error");
        console.log(err);
    }));
    return Balizas;
}
function GetTiempo(id = "C080") {
    return $.ajax({
        type: "GET",
        dataType: "html",
        url: url + "TiempoItems/" + id,
        headers: {
            accept: "application/json"
        }
    }).fail(function(err) {
        console.log("ERROR: " + err);
    });
// let aDatos;
// let Balizas = Promise.resolve(
//   $.ajax({
//     type: "GET",
//     dataType: "html",
//     url: url + "TiempoItems/" + id,
//     headers: {
//       accept: "application/json",
//     },
//   })
//     .done(function (response) {
//       aDatos = JSON.parse(response);
//       console.log(aDatos);
//     })
//     .fail(function (err) {
//       console.log("error");
//       console.log(err);
//     })
// );
// return Balizas;
}

//# sourceMappingURL=index.32339e13.js.map
