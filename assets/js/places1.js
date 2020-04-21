var kerry = {
    lat: 52.261062,
    lng: -9.683187
};
var geocoder;
var map;
var markers = Array();
var infos = Array();

function initMap() {
    var bounds = new google.maps.LatLngBounds();
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8.5,
        center: kerry
    });

    //Taken from Codex tutorial on multiple markers

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
            '<p>Bait: Lug, mackerel,lures and sandeel.</p>' + '</div>'
        ],
        ['<div class="info_content">' +
            '<h3>Valentia Island</h3>' +
            '<p>Beach, Pier and Rock fishing.</p>' +
            '<p>The beach and pier are easily accessible but be careful on the rocks.</p>' +
            '<p>Bait: Lug, mackerel, sandeel and lures.</p>' + '</div>'
        ],
        ['<div class="info_content">' +
            '<h3>Inch Beach</h3>' +
            '<p>Beach fishing at its finest one of Irelands premier beach marks.</p>' +
            '<p>The beach is easily accessible but be careful on the rocks, people often drive onto the beach but be mindful of the tide as is comes in quickly and has caught out some in the past.</p>' +
            '<p>Bait: Lug, mackerel and sandeel</p>' + '</div>'
        ],
        ['<div class="info_content">' +
            '<h3>Fenit Pier</h3>' +
            '<p>Pier and Rock fishing.</p>' +
            '<p>The pier is easily accessible, one can simply drive down and park on the pier, but be careful on the rocks. This is my personal favourite ;)</p>' +
            '<p>Bait: Lug, mackerel/bluey, sandeel and feathers/lures</p>' + '</div>'
        ],
        ['<div class="info_content">' +
            '<h3>Tarbert on The Shannon Estuary</h3>' +
            '<p>Beach, Pier and Rock fishing.</p>' +
            '<p>The beach and pier are easily accessible but be careful on the rocks</p>' +
            '<p>Bait: Lug, mackerel and sandeel</p>' + '</div>'
        ]
    ];

    var image = {
        url: "https://i.ibb.co/NVrPjGJ/sm.png",
        size: new google.maps.Size(70, 95),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
    };

    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };

    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(),
        marker, i;

    // Place each marker on the map  
    for (i = 0; i < marks.length; i++) {
        var position = new google.maps.LatLng(marks[i][1], marks[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: image,
            shape: shape,
            title: marks[i][0]
        });

        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

    }

// The next half I found on Script turorials and I adapted it to this map to search for
// nearby services

// clear overlays function
function clearOverlays() {
    if (markers) {
        for (i in markers) {
            markers[i].setMap(null);
        }
        markers = [];
        infos = [];
    }
}
// clear infos function
function clearInfos() {
    if (infos) {
        for (i in infos) {
            if (infos[i].getMap()) {
                infos[i].close();
            }
        }
    }
}

// find custom places function
document.getElementById ("findPlaces").addEventListener ("click", myFunction, false);

function myFunction() {
    // prepare variables (filter)
    var radius = document.getElementById('gmap_radius').value;
    var keyword = document.getElementById('gmap_keyword').value;
    var lat = document.getElementById('lat').value;
    var lng = document.getElementById('lng').value;
    var cur_location = new google.maps.LatLng(lat, lng);
    // prepare request to Places
    var request = {
        location: cur_location,
        radius: radius,
    };
    if (keyword) {
        request.keyword = [keyword];
    }
    // send request
    service = new google.maps.places.PlacesService(map);
    service.search(request, createMarkers);
}
// create markers (from 'findPlaces' function)
function createMarkers(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        // if we have found something - clear map (overlays)
        clearOverlays();
        // and create new markers by search result
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    } else if (status == google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
        alert('Sorry, nothing is found');
    }
}
// creare single marker function
function createMarker(obj) {
    // prepare new Marker object
    var mark = new google.maps.Marker({
        position: obj.geometry.location,
        map: map,
        title: obj.name
    });
    markers.push(mark);
    // prepare info window
    var infowindow = new google.maps.InfoWindow({
        content: '<img src="' + obj.icon + '" /><font style="color:#000;">' + obj.name +
            '<br />Rating: ' + obj.rating + '<br />Vicinity: ' + obj.vicinity + '</font>'
    });
    // add event handler to current marker
    google.maps.event.addListener(mark, 'click', function() {
        clearInfos();
        infowindow.open(map, mark);
    });
    infos.push(infowindow);
}
}

// initialization
google.maps.event.addDomListener(window, 'load', initialize);