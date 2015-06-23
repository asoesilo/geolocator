angular.module('aGeolocator', [])
  .factory('Geolocator', function($http, $q){
    GEOIP_URL = "https://www.telize.com/geoip"

    _getIPLocation = function() {
      $http.get(GEOIP_URL).then(function(res) {
        return res.data;
      }).catch(function(err){
        return $q.reject(err.data);
      });
    };

    return {
      getIPLocation: _getIPLocation
    };
  });
