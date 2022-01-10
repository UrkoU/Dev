import L from "leaflet";
var map = L.map("map").setView([51.505, -0.09], 13);

sEstaciones.forEach((element) => {
  L.marker([element.GpxX, element.GpxY]).addTo(map).bindPopup("A pretty CSS3 popup.<br> Easily customizable.").openPopup();
});
