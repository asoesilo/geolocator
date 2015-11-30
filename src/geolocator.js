angular.module('aGeolocator', [])
  .factory('Geolocator', ['$http', '$q', function($http, $q){
    var GEOIP_URL = "https://www.ipinfo.io/json";

    var _parseDate = function(data) {
      loc = data.loc.split(',');
      lat = parseInt(loc[0]);
      lng = parseInt(loc[1]);
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        postal: data.postal,
        coords: {
          latitude: lat,
          longitude: lng
        }
      };
    };

    var _getIPLocation = function() {
      return $http.get(GEOIP_URL).then(function(res) {
        return _parseDate(res.data);
      }).catch(function(err){
        return $q.reject(err.data);
      });
    };

    return {
      getIPLocation: _getIPLocation
    };
  }]);
