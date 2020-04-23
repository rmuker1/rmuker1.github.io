/* global L jQuery */
var map3 = L.map('map3').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map3)
var statesUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesUrl, function (data) {
  var stateStyle = function (feature) {
    var pop = feature.properties.POPULATION
    var stateColor = 'violet'
    if (pop < 4631918.5) { stateColor = 'darkmagenta' }
    return {
      color: stateColor,
      weight: 1.5,
      fillOpacity: 0.2,
    }
  }
  var GeojsonOptionsObject = {
  style: stateStyle,
   onEachFeature: createPopup
  }
}
  L.geoJSON(data, GeojsonOptions).addTo(map3)
})

 var createPopup = function (feature, layer) {
   var name = feature.properties.STATE_NAME
   var age = feature.properties.POPULATION
   layer.bindPopup('Population of ' + name + ': ' + pop + '<br>National average: 4631918.5')
 }
