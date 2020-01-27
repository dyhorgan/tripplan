console.log('hello world')

const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = `pk.eyJ1IjoiZGhvcmdhbiIsImEiOiJjazV3b2k4N2YxN2YzM25rMG1rbXY1eG5pIn0.px8yoW0OkQlm7Wori1CvIA`;

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker('activity', [-73.9772, 40.7527])

console.log('MArkertest', marker)
console.log('origMarker', markerDomEl)
marker.addTo(map)