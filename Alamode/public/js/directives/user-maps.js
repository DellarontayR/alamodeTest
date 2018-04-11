'use strict';

alamode.directive('userMaps', function ($q) {
    return {
        // somehow get the users current gps location with geolocater or using location selection and search
        // After deciding the location communicate back to server to theorize the amount of time needed        
        restrict: 'E',
        scope: {
            receipt: '='
        },
        template: '<div></div>',
        replace: true,
        link: function (scope, element, attributes) {
            var map = false;
            var marker = false;
            var userMarker = false;
            var leesMarker = false;

            function setBounds(markersArray) {
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < markersArray.length; i++) {
                    bounds.extend(markersArray[i].getPosition());
                }
                map.fitBounds(bounds);
            };

            scope.setupOnOrder = function () {
                var location = { coords: { latitude: scope.receipt.geometryAddress.lat, longitude: scope.receipt.geometryAddress.lng } };
                var coords = location.coords;
                var latLng = new google.maps.LatLng(coords.latitude, coords.longitude);
                var mapOptions = {
                    center: latLng,
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById(attributes.id), mapOptions);
                userMarker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: 'Your order is on it\'s way'
                });

                userMarker.setMap(map);
                var originalDriverLatLng = new google.maps.LatLng(37.4266083, -122.15756340000002);

                var icon = {
                    url: "../imgs/Media/dot.svg", // url
                    scaledSize: new google.maps.Size(20, 20), // scaled size
                    origin: new google.maps.Point(0, 0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };

                leesMarker = new google.maps.Marker({
                    position: originalDriverLatLng,
                    map: map,
                    title: 'The Lees',
                    icon: icon
                });
                leesMarker.setMap(map);

                setBounds([leesMarker, userMarker]);

                google.maps.event.trigger(map, "resize");
            };
            scope.resetBounds = function () {
                setBounds([leesMarker,userMarker]);
                map.setZoom(13);
            };


            google.maps.event.addDomListener(window, 'load', scope.resetBounds);

            scope.$watch('receipt', function (value) {
                if (value && value !== undefined) {
                    scope.setupOnOrder();
                }
            });
        }
    }
});