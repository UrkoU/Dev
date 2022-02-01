const url = "https://localhost:5001/";
let sToken = "";
function GetBalizas() {
    return $.ajax({
        type: "GET",
        dataType: "html",
        url: url + "api/Meteorologia/",
        headers: {
            accept: "application/json",
            authorization: "Bearer " + sToken
        }
    }).fail(function(err) {
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
            authorization: "Bearer " + sToken
        }
    }).fail(function(err) {
        console.log("ERROR: " + err);
    });
}
function DevolverDato(codigo) {
    return $.ajax({
        type: "GET",
        dataType: "html",
        url: url + "Meteorologia/" + codigo,
        headers: {
            accept: "application/json",
            authorization: "Bearer " + sToken
        }
    }).fail(function(err) {
        console.log("ERROR: " + err);
    });
}
function LoginApi(user, pass) {
    return $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        url: "https://localhost:5001/Users/Authenticate/",
        data: JSON.stringify({
            username: user,
            password: pass
        }),
        headers: {
            accept: "application/json",
            dataType: "json",
            contentType: "application/json"
        }
    }).fail(function(err) {
        console.log("ERROR: " + err);
    });
}

//# sourceMappingURL=index.32339e13.js.map
