var map1 = L.map('map1').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map1)
var santacruzMarker = L.marker([36.97506, -122.03003]).addTo(map1)
var triangle = L.polygon([
  [37.00117, -122.0702],
  [37.00501, -122.05217],
  [36.98197, -122.04857],
  [36.9843, -122.06659]
]).addTo(map1)
triangle.bindPopup('Boundaries of the UC Santa Cruz campus.')
santacruzMarker.bindPopup('City of Santa Cruz, CA')
