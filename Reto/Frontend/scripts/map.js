import L from "leaflet";

const map = L.map("map").setView([42.983333333333, -2.6166666666667], 8.7);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var markerIcon = L.icon({
  iconUrl: "../images/marker-green.png",
  iconSize: [41, 41],
});

var selectedIcon = L.icon({
  iconUrl: "../images/marker-selected.png",
  iconSize: [41, 41],
});

function CargarMarcadores() {
  // Cargar los marcadores de cada baliza
  aBalizas.forEach((item) => {
    const marker = L.marker([item.latwgS84, item.lonwgS84], { icon: markerIcon }).addTo(map);
    marker.bindPopup(`${item.nombre}`);
    marker.on("click", (e) => {
      console.log(item.codigo);
      e.target.setIcon(selectedIcon);
    });
  });
  // map.setView([43.32, -1.98], 9);
}

window.CargarMarcadores = CargarMarcadores;
