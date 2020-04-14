/* global L jQuery */
var map3 = L.map('map3').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map3)
var statesUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesUrl, function (data) {
  L.geoJSON(data, { style: { color: 'pink' } }).addTo(map3)
})
