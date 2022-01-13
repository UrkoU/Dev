import L from "leaflet";

let map = L.map("map").setView([43.32, -1.98], 11);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

function CargarMarcadores() {
  // Cargar los marcadores de cada valiza
  aBalizas.forEach((item) => {
    const marker = L.marker([item.latwgS84, item.lonwgS84]).addTo(map);
    marker.bindPopup(`${item.nombre}`);
    marker.on("click", () => console.log(item.codigo));
  });
}

window.CargarMarcadores = CargarMarcadores;
