angular.module('aGeolocator', [])
  .factory('Geolocator', ['$http', '$q', function($http, $q){
    var GEOIP_URL = "https://www.telize.com/geoip";

    var _getIPLocation = function() {
      return $http.get(GEOIP_URL).then(function(res) {
        return res.data;
      }).catch(function(err){
        return $q.reject(err.data);
      });
    };

    return {
      getIPLocation: _getIPLocation
    };
  }]);
