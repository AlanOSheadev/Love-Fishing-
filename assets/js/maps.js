 function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 9,
                center: {
                    lat: 52.261062,
                    lng: -9.683187
                }
            });
            setMarkers(map);
      }
// ---- Taken from Google turotials on complex markers ----
      var marks = [
        ['Kells Bay,beach, pier and rock fishing, the beach and pier are accessible but be careful on the rocks, bait: lug, sandeel and mackerel', 52.025557, -10.103597, 4],
        ['Valentia Island Bridge', 51.889028, -10.365987, 5],
        ['Inch Beach', 52.127794, -9.972862, 3],
        ['Fenit Pier', 52.273029, -9.864129, 2],
        ['Tarbert on the Shannon Estuary', 52.586859, -9.358040, 1]
      ];

         // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Brooklyn Museum</h3>' +
        '<p>The Brooklyn Museum is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Brooklyn Public Library</h3>' +
        '<p>The Brooklyn Public Library (BPL) is the public library system of the borough of Brooklyn, in New York City.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Prospect Park Zoo</h3>' +
        '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
        '</div>']
    ];

      function setMarkers(map) {
          var image = {
            url:"https://i.ibb.co/NVrPjGJ/sm.png",
            size: new google.maps.Size(20, 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32)
        };
       
        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };

        var infoWindow = new google.maps.InfoWindow(), marker, i;

        for (var i = 0; i < marks.length; i++) {
          var mark = marks[i];
          var position = new google.maps.LatLng(mark[1], mark[2]);
          var marker = new google.maps.Marker({
            position: position ,
            map: map,
            icon: image,
            shape: shape,
            title: mark[0],
            zIndex: mark[3]
          });
    }
    
// ---- Taken from Codex turotials on multiple markers info windows ----

       
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));
      }

    //     // Center the map to fit all markers on the screen
    //     map.fitBounds(bounds);
    

    // // Set zoom level
    // var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
    //     this.setZoom(9);
    //     google.maps.event.removeListener(boundsListener);
    // });
   

      var markerCluster = new MarkerClusterer(map, marks,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=hotel&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@lat: mark[1], lng: mark[2]&key=AIzaSyCSENlQwLM6btnfzoUUCsVci5D-mGi8rzI

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=mark[1],lng: mark[2]&radius=15000&type=restaurant&key=YOUR_API_KEY=AIzaSyCSENlQwLM6btnfzoUUCsVci5D-mGi8rzI