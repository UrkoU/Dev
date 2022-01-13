const url = "https://localhost:5001/api/";
function GetBalizas() {
    let aDatos;
    let Balizas = Promise.resolve($.ajax({
        type: "GET",
        dataType: "html",
        url: url + "BalizaItem",
        headers: {
            accept: "application/json"
        }
    }).done(function(response) {
        aDatos = JSON.parse(response);
    }).fail(function(err) {
        console.log("error");
        console.log(err);
    }));
    console.log(Balizas);
    return Balizas;
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

//# sourceMappingURL=index.32339e13.js.map
