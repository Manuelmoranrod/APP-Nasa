const mapId = "map";
const initialCoordinates = [34.048321956380754, -118.22672602012162]; // L.A. [lat, lng]
const map = L.map(mapId).setView(initialCoordinates, 12);


const ACCESS_TOKEN = "pk.eyJ1IjoibWFudWVsbW9yYW5yb2QiLCJhIjoiY2tyNjF4bTBpMDF1eTJxcGd1eDFsaXZobSJ9.FtkKh8K_3GGo0PEfFFSfRg"
const ATTRIBUTION =
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

const MAPBOX_API =
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}";

L.tileLayer(MAPBOX_API, {
    attribution: ATTRIBUTION,
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ACCESS_TOKEN,
}).addTo(map);

L.marker(initialCoordinates)
    .bindPopup("<b>Los Angeles</b><br>Posición inicial del mapa")
    .addTo(map);

