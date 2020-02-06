// ---- Taken from Codex turotials on multiple markers info windows ----
var type;
var radius;
var markers =[];

 function initMap() {
    var bounds = new google.maps.LatLngBounds();
    var kerry = { lat: 52.261062, lng: -9.683187 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8.5,
        center: kerry
    });

    // Multiple markers location, latitude, and longitude
    var marks = [
        ['Kells Bay', 52.025557, -10.103597, 4],
        ['Valentia Island Bridge', 51.889028, -10.365987, 5],
        ['Inch Beach', 52.127794, -9.972862, 3],
        ['Fenit Pier', 52.273029, -9.864129, 2],
        ['Tarbert on the Shannon Estuary', 52.586859, -9.358040, 1]
    ];

    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
            '<h3>Kells Bay</h3>' +
            '<p>Beach, Pier and Rock fishing.</p>' +
            '<p>The beach and pier are easily accessible but be careful on the rocks.</p>' +
            '<p>Bait: Lug, mackerel,lures and sandeel.</p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>Valentia Island</h3>' +
            '<p>Beach, Pier and Rock fishing.</p>' +
            '<p>The beach and pier are easily accessible but be careful on the rocks.</p>' +
            '<p>Bait: Lug, mackerel, sandeel and lures.</p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>Inch Beach</h3>' +
            '<p>Beach fishing at its finest one of Irelands premier beach marks.</p>' +
            '<p>The beach is easily accessible but be careful on the rocks, people often drive onto the beach but be mindful of the tide as is comes in quickly and has caught out some in the past.</p>' +
            '<p>Bait: Lug, mackerel and sandeel</p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>Fenit Pier</h3>' +
            '<p>Pier and Rock fishing.</p>' +
            '<p>The pier is easily accessible, one can simply drive down and park on the pier, but be careful on the rocks. This is my personal favourite ;)</p>' +
            '<p>Bait: Lug, mackerel/bluey, sandeel and feathers/lures</p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>Tarbert on The Shannon Estuary</h3>' +
            '<p>Beach, Pier and Rock fishing.</p>' +
            '<p>The beach and pier are easily accessible but be careful on the rocks</p>' +
            '<p>Bait: Lug, mackerel and sandeel</p>' + '</div>']
    ];

    var image = {
        url: "https://i.ibb.co/NVrPjGJ/sm.png",
        size: new google.maps.Size(50, 75),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
    };

    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };


    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Place each marker on the map  
    for (i = 0; i < marks.length; i++) {
        var position = new google.maps.LatLng(marks[i][1], marks[i][2]);
        bounds.extend(position);
        infos = new google.maps.Marker({
            position: position,
            map: map,
            icon: image,
            shape: shape,
            title: marks[i][0]
        });

        // Add info window to marker    
        google.maps.event.addListener(infos, 'click', (function (infos, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, infos);
            }
        })(infos, i));
    }  
    
    // function clearOverlays() {
    // if (markers) {
    //     for (i in markers) {
    //         markers[i].setMap(null);
    //         }
    //     markers = [];
    //     }
    // }

     const filterButtons = document.getElementsByClassName('btn');
 
    function handleClick(event) {
        var type = event.target.getAttribute('data-type');
        findPlaces();
    }
 
    Array.from(filterButtons).forEach(button => {
        button.addEventListener('click', handleClick);
    });

   
    function findPlaces (){
        var type = event.target.getAttribute('data-type');
        var radius = document.getElementById('radiusSelect').value;

        var request = {
            location: kerry,
            radius: radius,
            keyword: type
        };

        // console.log(request);

        service = new google.maps.places.PlacesService(map);
        service.search(request, createMarkers);
    }
    function createMarkers(places) {
     if (status == google.maps.places.PlacesServiceStatus.OK) {
    var bounds = new google.maps.LatLngBounds();
    var placesList = document.getElementById('places');

    for (var i = 0, place; place = places[i]; i++) {
        
        var image = {
            
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        
        var markers = new google.maps.Marker({
            
            map: map,
            icon: image,
            title: place.name,
            position: place.geometry.location
        });

        places.push(markers);

        var li = document.createElement('li');
        li.textContent = place.name;
        placesList.appendChild(li);

        bounds.extend(place.geometry.location);
        }
    }
}

google.maps.event.addDomListener(window, 'load', initMap);

 }




   
    