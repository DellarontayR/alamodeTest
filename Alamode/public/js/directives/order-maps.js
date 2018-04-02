'use strict';
alamode.directive('orderMaps', function ($q) {
    return {
        // somehow get the users current gps location with geolocater or using location selection and search
        // After deciding the location communicate back to server to theorize the amount of time needed        
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        link: function (scope, element, attributes) {
            console.log(scope.mookie);

            // Genereal flow is user is finished checking out, They choose delivery or pickup, from delivery they'll put in an address and a map will pop up, They can have a box to chang the address

            //ordermaps starts when user already has given previous location
            var map = false;
            var infowindow = false;
            var marker = false;

            scope.setupOnUserLocation = function () {
                // if (location === null) return;
                var location = { coords: { latitude: '37.4266083', longitude: '-122.15756340000002' } };


                var coords = location.coords || scope.userLocation;
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
                    title: 'Welcome to Mookie Dough'
                });
                userMarker.setMap(map);



                var input = document.getElementById('order-input');
                map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);


                var autocomplete = new google.maps.places.Autocomplete(input);

                // Bind the map's bounds (viewport) property to the autocomplete object,
                // so that the autocomplete requests use the current map bounds for the
                // bounds option in the request.
                autocomplete.bindTo('bounds', map);

                infowindow = new google.maps.InfoWindow();
                var infowindowContent = document.getElementById('infowindow-content');
                infowindow.setContent(infowindowContent);
                marker = new google.maps.Marker({
                    map: map,
                    anchorPoint: new google.maps.Point(0, -29)
                });


                autocomplete.addListener('place_changed', function () {
                    infowindow.close();
                    marker.setVisible(false);
                    var place = autocomplete.getPlace();
                    console.log(place.formatted_address);
                    if (place) {
                        scope.mookie.deliveryLocationChanged = true;
                        scope.mookie.deliveryLocation = place.formatted_address;
                        scope.$apply();
                    }
                    if (!place.geometry) {
                        // User entered the name of a Place that was not suggested and
                        // pressed the Enter key, or the Place Details request failed.
                        window.alert("No details available for input: '" + place.name + "'");
                        return;
                    }

                    // If the place has a geometry, then present it on a map.
                    if (place.geometry.viewport) {
                        map.fitBounds(place.geometry.viewport);
                    } else {
                        map.setCenter(place.geometry.location);
                        map.setZoom(17);  // Why 17? Because it looks good.
                    }
                    marker.setPosition(place.geometry.location);
                    marker.setVisible(true);
                    userMarker.setMap(null);

                    var address = '';
                    if (place.address_components) {
                        address = [
                            (place.address_components[0] && place.address_components[0].short_name || ''),
                            (place.address_components[1] && place.address_components[1].short_name || ''),
                            (place.address_components[2] && place.address_components[2].short_name || '')
                        ].join(' ');
                    }

                    infowindowContent.children['place-icon'].src = place.icon;
                    infowindowContent.children['place-name'].textContent = place.name;
                    infowindowContent.children['place-address'].textContent = address;
                    infowindow.open(map, marker);
                });

                var types = ['address'];
                autocomplete.setTypes(types);
                autocomplete.setOptions({ strictBounds: true });
            };
            // setUpOnUserLocation(location);
            scope.setupOnUserLocation();

            function setBounds(markersArray) {
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < markersArray.length; i++) {
                    bounds.extend(markersArray[i].getPosition());
                }
                console.log(bounds);
                map.fitBounds(bounds);
            }

            function findUserLocation() {
                // setUpOnUserLocation(location);

                // if (navigator.geolocation) {
                //     navigator.geolocation.getCurrentPosition(setupOnUserLocation, function (err, info) {
                //         var tries = 0;
                //         while (tries < 5) {
                //             navigator.geolocation.getCurrentPosition(setupOnUserLocation, function (err, info) {
                //                 console.log(err);
                //                 console.log(tries);
                //                 console.log('We could not use GPS to find your address at this time');
                //             }, { timeout: 1000 });
                //             setTimeout(1000);
                //         }
                //     }, { timeout: 5000 });
                // }
            };
            // findUserLocation();

            // var trip = [latLng, latLng2];
            // var path = new google.maps.Polyline({
            //     path: trip,
            //     strokeColor: "#000000",
            //     strokeOpacity: 0.8,
            //     strokeWeight: 2
            // });
            // path.setMap(map);
            scope.mookie.deliveryInProgress = false;
            scope.$watch('mookie.deliveryInProgress', function (value) {//From CheckoutController:89
                if (value && value !== undefined) {
                    var latLng = new google.maps.LatLng(37.4266083, -122.15756340000002);

                    var icon = {
                        url: "../imgs/Media/goodmookie.svg", // url
                        scaledSize: new google.maps.Size(50, 50), // scaled size
                        origin: new google.maps.Point(0, 0), // origin
                        anchor: new google.maps.Point(0, 0) // anchor
                    };

                    var leesMarker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        title: 'The Lees',
                        icon: icon
                    });
                    leesMarker.setMap(map);
                    
                    setBounds([leesMarker, marker]);

                    var trip = [marker.getPosition(), leesMarker.getPosition()];
                    var path = new google.maps.Polyline({
                        path: trip,
                        strokeColor: "#000000",
                        strokeOpacity: 0.8,
                        strokeWeight: 2
                    });
                    path.setMap(map);

                    google.maps.event.trigger(map, "resize");
                }
            });
        }
    }
});