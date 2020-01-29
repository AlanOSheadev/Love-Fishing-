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
        for (var i = 0; i < marks.length; i++) {
          var mark = marks[i];
          var markers= new google.maps.Marker({
            position: {lat: mark[1], lng: mark[2]},
            map: map,
            icon: image,
            shape: shape,
            title: mark[0],
            zIndex: mark[3]
          });
    }

      var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    }
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=hotel&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@lat: mark[1], lng: mark[2]&key=AIzaSyCSENlQwLM6btnfzoUUCsVci5D-mGi8rzI

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=mark[1],lng: mark[2]&radius=15000&type=restaurant&key=YOUR_API_KEY=AIzaSyCSENlQwLM6btnfzoUUCsVci5D-mGi8rzI