//step 1 create function to retrieve data from api
//step 2 render map
//step 3 render single marker info window hard coded data
//step 4 
var map;
var type;
var radius;
var kerry = { lat: 52.261062, lng: -9.683187 };


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8.5,
        center: kerry
    });
    getData(map);
 }

const buttons = Array.from(document.getElementsByClassName(btn));

buttons.forEach(btn =>{
    btn.addEventListener('click', function(event){
     var type = event.target.getAttribute('data-type');
     nearbySearch;
    });
})

function getData(map){
      var service = new google.maps.places.PlacesService(map);
      var radius = document.getElementById('radiusSelect').value;

service.nearbySearch(
      {location: kerry, radius: radius, type: type},
      function(results, status, pagination) {
        if (status !== 'OK') return;

        

        createMarkers(results, map);

      });
}


function createMarkers (results, map) {
for (i = 0; i < results.length-1; i++) {
    var location = results[i];
    console.log(location);
        var marker = new google.maps.Marker({
            position: {lat: location.geometry.location.lat(), lng: location.geometry.location.lng()},
            map: map
        });
        
    }
}
