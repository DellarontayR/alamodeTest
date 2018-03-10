'use strict';
alamode.directive('orderMaps', function ($q) {
    return {
        // somehow get the users current gps location with geolocater or using location selection and search
        // After deciding the location communicate back to server to theorize the amount of time needed        
        restrict: 'E',
        template: '<div></div>',
        scope: {
            type: '=',
            userLocation: '=location'
        },
        replace: false,
        link: function (scope, element, attributes) {

            // Genereal flow is user is finished checking out, They choose delivery or pickup, from delivery they'll put in an address and a map will pop up, They can have a box to chang the address

            //ordermaps starts when user already has given previous location

            var setupOnUserLocation = function(location){
                var coords = location || scope.userLocation;
                var latLng = new google.maps.LatLng(coords.latitude,coords.longitude);
                var mapOptions ={
                    center:latLng,
                    zoom:13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById(attibutes.id),mapOptions);
                var userMarker = new google.maps.Marker({
                    position:latLng,
                    map:map,
                    title:'Welcome to Mookie Dough'
                });
                userMarker.setMap(map);
            }

            

            var findUserLocation = function () {
                var checkLocation = false;
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(checkLocation);
                    if(checkLocation){
                        setupOnUserLocation(checkLocation);
                    }
                }
            };

            // 

            // var trip = [latLng, latLng2];
            // var path = new google.maps.Polyline({
            //     path: trip,
            //     strokeColor: "#000000",
            //     strokeOpacity: 0.8,
            //     strokeWeight: 2
            // });
            // path.setMap(map);


            // var searchbox = new google.maps.places.SearchBox
            // var places = new google.maps.places.PlacesService(map);

        }
    }
});