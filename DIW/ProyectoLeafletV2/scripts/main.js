import L from "leaflet";

let sTabla;

let aOfertas = JSON.parse(sOfertas);
const aCiudades = [
  { name: "Irún", value: "IRUN", lat: "43.338230", long: "-1.789270" },
  { name: "Donostia", value: "DONOSTIA/SAN SEBASTIÁN", lat: "43.320900", long: "-1.984520" },
  { name: "Errentería", value: "ERRENTERIA", lat: "43.311298", long: "-1.900890" },
  { name: "Hondarribia", value: "HONDARRIBIA", lat: "43.362530", long: "-1.791500" },
  { name: "Deba", value: "DEBA", lat: "43.295559", long: "-2.353890" },
  { name: "Andoain", value: "ANDOAIN", lat: "43.220482", long: "-2.021120" },
  { name: "Bilbao", value: "BILBAO", lat: "43.263012", long: "-2.934985" },
  { name: "Elgoibar", value: "ELGOIBAR", lat: "43.215190", long: "-2.415700" },
  { name: "Ermua", value: "ERMUA", lat: "43.186640", long: "-2.502610" },
  { name: "Galdakao", value: "GALDAKAO", lat: "43.231468", long: "-2.840500" },
  { name: "Portugalete", value: "PORTUGALETE", lat: "43.320690", long: "-3.020320" },
  { name: "Ondarroa", value: "ONDARROA", lat: "43.320700", long: "-2.420480" },
  { name: "Pasaia", value: "PASAIA", lat: "43.327480", long: "-1.919880" },
  { name: "Santurtzi", value: "SANTURTZI", lat: "43.328160", long: "-3.031450" },
  { name: "Legazpi", value: "LEGAZPI", lat: "43.054359", long: "-2.333640" },
  { name: "Bergara", value: "BERGARA", lat: "43.118221", long: "-2.413360" },
  { name: "Eibar", value: "EIBAR", lat: "43.184071", long: "-2.472820" },
  { name: "Durango", value: "DURANGO", lat: "43.169070", long: "-2.632660" },
  { name: "Hernani", value: "HERNANI", lat: "43.267550", long: "-1.975810" },
  { name: "Lezo", value: "LEZO", lat: "43.321129", long: "-1.898770" },
  { name: "Mutriku", value: "MUTRIKU", lat: "43.307070", long: "-2.385080" },
  { name: "Oiartzun", value: "OIARTZUN", lat: "43.299280", long: "-1.857870" },
  { name: "Mendaro", value: "MENDARO", lat: "43.250930", long: "-2.388180" },
  { name: "Orio", value: "ORIO", lat: "43.278320", long: "-2.126600" },
  { name: "Zarautz", value: "ZARAUTZ", lat: "43.280360", long: "-2.171590" },
];

// Crear el mapa
let map = L.map("map").setView([43.32, -1.98], 11);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

document.getElementById("btnUbicacion").addEventListener("click", () => {
  CentrarUbicacion();
});

// Añadir ciudades con markers
aCiudades.forEach((element) => {
  const marker = L.marker([element.lat, element.long]).addTo(map);
  marker.bindPopup(`${element.name}`).openPopup();
  marker.on("click", () => CambiarInfoTabla(element.value));
});
let setCiudades = new Set();
function CambiarInfoTabla(selectedValue) {
  if (!setCiudades.has(selectedValue)) {
    setCiudades.add(selectedValue);
    let sTab = `<li class="nav-item" role="presentation">
                <button class="nav-link" id="${selectedValue}-tab" data-bs-toggle="tab" data-bs-target="#${selectedValue}" type="button"
                role="tab" aria-controls="${selectedValue}" aria-selected="true">${selectedValue}&nbsp;<a class="btn-close"></a></button>
              </li>`;
    let tabMenu = document.getElementById("myTab");
    tabMenu.innerHTML += sTab;
    // Cambiar la información de la tabla según el select
    sTabla = `
  <div class="container">
    <div class="row">
      <div class="col-2">
        Oferta
      </div>
      <div class="col-8">
        Descripción
      </div>
      <div class="col-1">
        Fecha de publicación
      </div>
      <div class="col-1">
        Link
      </div>
    </div>`;

    CambiarOfertas(selectedValue);
    AnadirInfoTabla(selectedValue);

    document.querySelectorAll(".btn-close").forEach((item) => {
      item.addEventListener("click", (ev) => {
        const details = ev.target.parentElement.getAttribute("aria-controls");
        ev.target.parentElement.remove();
        document.getElementById(details).remove();
      });
    });
  }
}

let aOfertasFiltradas;

function CambiarOfertas(selectedValue) {
  // Cambiar las ofertas filtradas po r municipio
  aOfertasFiltradas = aOfertas.filter((oferta) => oferta.municipio == selectedValue);
  // Ordenar las ofertas
  aOfertasFiltradas = aOfertasFiltradas.sort((a, b) => new Date(b.fecPub).getTime() - new Date(a.fecPub).getTime());
}

function AnadirInfoTabla(selectedValue) {
  let div = document.createElement("div");
  $("tab-pane").removeClass("active");
  $("tab-pane").removeClass("show");
  div.innerHTML = `<div class="tab-pane fade show active" id="content${selectedValue}" role="tabpanel" aria-labelledby="${selectedValue}-tab">
                  ${selectedValue}</div>`;

  // Añadir las ofertas en la tabla
  aOfertasFiltradas.forEach((element) => {
    sTabla += `    
    <div class="row">
      <div class="col-2">
        ${element.desEmpleo}
      </div>
      <div class="col-8">
        ${element.desPuesto}
      </div>
      <div class="col-1">
        ${element.fecPub}
      </div>
      <div class="col-1">
        <a href="${element.url}">Link</a>
      </div>
    </div>`;
  });
  sTabla += `</div>`;
  $("#myTabContent").append(div);
  document.getElementById(`content${selectedValue}`).innerHTML = sTabla;
}

function CentrarUbicacion() {
  // Pedir ubicación al usuario
  navigator.geolocation.getCurrentPosition(function (position) {
    map.setView([position.coords.latitude, position.coords.longitude], 13);
  });
}
