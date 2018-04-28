'use strict';
alamode.directive('manageMaps', function ($q) {
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
            console.log(scope.$parent);
            var map = false;
            var marker = false;

            function setBounds(markersArray) {
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < markersArray.length; i++) {
                    bounds.extend(markersArray[i].getPosition());
                }
                map.fitBounds(bounds);
            };

            scope.setupOnOrder = function () {
                var directionsService = new google.maps.DirectionsService();
                var directionsDisplay = new google.maps.DirectionsRenderer();

                var location = { coords: { latitude: scope.receipt.geometryAddress.lat, longitude: scope.receipt.geometryAddress.lng } };
                var coords = location.coords;
                var latLng = new google.maps.LatLng(coords.latitude, coords.longitude);
                var mapOptions = {
                    center: latLng,
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById(attributes.id), mapOptions);
                var userMarker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: 'Your order is on it\'s way'
                });

                userMarker.setMap(map);
                directionsDisplay.setMap(map);

                console.log(scope.$parent.orderContainer.order);
                var originalDriverLatLng = new google.maps.LatLng(scope.$parent.orderContainer.order.currentDriverLocation.lat, scope.$parent.orderContainer.order.currentDriverLocation.lng);

                var icon = {
                    url: "../imgs/Media/dot.svg", // url
                    scaledSize: new google.maps.Size(20, 20), // scaled size
                    origin: new google.maps.Point(0, 0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };

                var leesMarker = new google.maps.Marker({
                    position: originalDriverLatLng,
                    map: map,
                    title: 'The Lees',
                    icon: icon
                });
                leesMarker.setMap(map);

                setBounds([leesMarker, userMarker]);

                var request = {
                    origin: leesMarker.getPosition(),
                    destination: userMarker.getPosition(),
                    travelMode: 'DRIVING'
                };

                directionsService.route(request, function (result, status) {
                    if (status == 'OK') {
                        directionsDisplay.setDirections(result);
                        scope.manager = {};
                        scope.manager.distanceFromUser = 0;
                        scope.manager.timeFromUser = 0;
                        var route = result.routes[0];

                        for (var i = 0; i < route.legs.length; i++) {
                            // ("123 hello everybody 4").replace(/(^\d+)(.+$)/i,'$1'); //=> '123' regex to first integer from string
                            // replace(/[^0-9.]/g, ""); Regex to get only numbers from string
                            scope.manager.distanceFromUser += route.legs[i].distance.text.replace(/[^0-9.]/g, "");
                        }
                        scope.$parent.orderContainer.distanceFromUser = route.legs[0].distance.text.replace(/[^0-9.]/g, "");
                        scope.$parent.orderContainer.timeFromUser = route.legs[0].duration.text.replace(/[^0-9.]/g, "");
                    }
                });
                google.maps.event.trigger(map, "resize");
            };

            scope.$watch('receipt', function (value) {
                if (value && value !== undefined) {
                    scope.setupOnOrder();
                }
            });

            scope.$watch('mookie.user.username',function(value){
                if(value && value !== undefined){
                    scope.setupOnOrder();
                }
            });
        }
    }
});