const {Marker} = require("mapbox-gl");

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    if(type.toLowerCase() === 'hotels'){
     markerDomEl.style.backgroundImage = iconURLs.hotels
    } else if(type.toLowerCase() === 'restaurants'){
        markerDomEl.style.backgroundImage = iconURLs.restaurants
    } else if (type.toLowerCase() === 'activity'){
        markerDomEl.style.backgroundImage = iconURLs.activities
    }
 return new Marker(markerDomEl).setLngLat(coords)  
};

module.exports = buildMarker;