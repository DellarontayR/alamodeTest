"use strict";

angular.module('gpsServices', [])

// Factor: Auth handles all login/logout functions	
.factory('GPS', function($http, AuthToken,$q) {
    var gpsFactory = {};
    // gpsFactory.createMap = function(gpsData){
    //     return $http.post
    // }
    gpsFactory.init = function(){
        var options ={
            center:new google.maps.LatLng(37.4266083, 
                -122.15756340000002), zoom:5,
                disableDefaultUI:true
        }
        gpsFactory.map = new google.maps.Map(
            document.getElementById("g-map"),options
        );
        gpsFactory.places = new google.maps.places.PlacesService(gpsFactory.map);
    }

    gpsFactory.search = function(str){
        var d = $q.defer();
        gpsFactory.places.textSearch({queser:str},function(results,status){
            if(status=='OK'){
                d.resolve(results[0]);
            }
            else d.reject(status);

        });
        return d.promise;
    }

    gpsFactory.addMarker = function(res){
        if(gpsFactory.marker) this.marker.setMap(null);
        gpsFactory.marker = new google.maps.Marker({
            map: gpsFactory.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP
        });
        gpsFactory.map.setCenter(res.geometry.location);
    }
    return gpsFactory;
});

///////////////


// app.controller('newPlaceCtrl', function($scope, Map) {

// $scope.place = {};

// $scope.search = function() {
//     $scope.apiError = false;
//     Map.search($scope.searchPlace)
//     .then(
//         function(res) { // success
//             Map.addMarker(res);
//             $scope.place.name = res.name;
//             $scope.place.lat = res.geometry.location.lat();
//             $scope.place.lng = res.geometry.location.lng();
//         },
//         function(status) { // error
//             $scope.apiError = true;
//             $scope.apiStatus = status;
//         }
//     );
// }

// $scope.send = function() {
//     alert($scope.place.name + ' : ' + $scope.place.lat + ', ' + $scope.place.lng);    
// }

// Map.init();
// });
