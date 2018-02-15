'use strict';
alamode.directive('mookieMaps', function ($q) {
    return {
        // somehow get the users current gps location with geolocater or using location selection and search
        // After deciding the location communicate back to server to theorize the amount of time needed        
        restrict: 'E',
        template: '<div></div>',
        scope: {
            type: '=',
            userLocation: '='
        },
        replace: true,
        link: function (scope, element, attributes) {
            var checkLocation = function (location) {
                var coords = location.coords;
                console.log(coords);
                console.log(coords.latitude);
                console.log(coords.longitude);
            };

            var findUserLocation = function () {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(checkLocation);
                }
            };

            findUserLocation();
            var latLng = new google.maps.LatLng(37.4266083, -122.15756340000002);
            var mapOptions = {
                center: latLng,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById(attributes.id), mapOptions);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: 'The Lees'
            });
            var latLng2 = new google.maps.LatLng(37.425444, -122.176126);
            var marker2 = new google.maps.Marker({
                position: latLng2,
                map: map,
                title: 'Uj'
            });

            marker.setMap(map);
            marker2.setMap(map);
            var trip = [latLng, latLng2];
            var path = new google.maps.Polyline({
                path: trip,
                strokeColor: "#000000",
                strokeOpacity: 0.8,
                strokeWeight: 2
            });
            path.setMap(map);


            // var searchbox = new google.maps.places.SearchBox
            // var places = new google.maps.places.PlacesService(map);

        }
    }
});