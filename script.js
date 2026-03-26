//leaflet
//map libre
//add custom marker
//add custom popups

var map = L.map('map').setView([43.6531884,-79.3940591], 17);

L.tileLayer("https://api.mapunik.com/styles/{style_id}/tiles/{z}/{x}/{y}?access_token=YOUR_TOKEN", {
  maxZoom: 19,
  attribution: "© Mapunik",
}).addTo(map);