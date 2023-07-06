mapboxgl.accessToken = 'pk.eyJ1IjoiYmVybXVkYW9nIiwiYSI6ImNsanJlMWJsMjBkZ3AzbGtjODh2NDVjNWEifQ.xkK8qZb4u8gUUAIo2cmJkg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [-73.922855, 40.808930],
  zoom: 14
});

var marker = new mapboxgl.Marker()
  .setLngLat([-73.922855, 40.808930]) // Starting marker position in NYC
  .addTo(map);

function move() {
  console.log("move is working");
  var index = 0;
  var coordinates = [
    [-73.922855, 40.808930], // "WILLIS AV/E 138 ST"
    [-73.921632, 40.810634], // "WILLIS AV/E 140 ST"
    [-73.919823, 40.813111], // "WILLIS AV/E 144 ST"
    [-73.918968, 40.814368], // "WILLIS AV/E 146 ST"
    [-73.920405, 40.812711], // "WILLIS AV/E 144 ST"
    [-73.921772, 40.810837], // "WILLIS AV/E 141 ST"
    [-73.922909, 40.809254], // "WILLIS AV/E 138 ST"
    [-73.926956, 40.810945], // "E 138 ST/3 AV"
    [-73.929474, 40.807938], // "LINCOLN AV/BRUCKNER Bl"
    [-73.916343, 40.815878], // "BERGEN AV/E 149 ST"
    [-73.990292, 40.731342], // "4 AV/E 10 ST"
    [-73.989958, 40.732608], // "4 AV/E 12 ST"
    [-73.989720, 40.733936], // "4 AV/E 13 ST"
    [-73.987053, 40.738976], // "PARK AV S/E 21 ST"
    [-73.969329, 40.766274], // "MADISON AV/E 63 ST"
    [-73.967483, 40.768812], // "MADISON AV/E 67 ST"
    [-73.966558, 40.770075], // "MADISON AV/E 69 ST"
    [-73.965308, 40.771802], // "MADISON AV/E 72 ST"
    [-73.964610, 40.772774], // "MADISON AV/E 74 ST"
    [-73.962739, 40.775322], // "MADISON AV/E 77 ST"
    [-73.960206, 40.778793]  // "MADISON AV/E 83 ST"
  ];

  function animateMarker() {
    var currentCoordinate = coordinates[index];
    if (Array.isArray(currentCoordinate) && currentCoordinate.length === 2) {
      var lon = currentCoordinate[0];
      var lat = currentCoordinate[1];
      if (!isNaN(lon) && !isNaN(lat)) {
        marker.setLngLat([lon, lat]);
      }
    }
    index = (index + 1) % coordinates.length;
    setTimeout(animateMarker, 3000);
  }

  animateMarker();
}
