angular.module('aGeolocator', [])
  .factory('Geolocator', ['$http', '$q', function($http, $q){
    var GEOIP_URL = "https://freegeoip.net/json";

    var _parseDate = function(data) {
      return {
        ip: data.ip,
        city: data.city,
        region: data.region_code,
        country: data.country_code,
        postal: data.zip_code,
        latitude: data.latitude,
        longitude: data.longitude
      };
    };

    var _getIPLocation = function(ipAddress) {
      url = GEOIP_URL
      if(ipAddress != null && ipAddress != undefined && ipAddress.length > 0) {
        url = url + '/' + ipAddress
      }
      return $http.get(url).then(function(res) {
        return _parseDate(res.data);
      }).catch(function(err){
        return $q.reject(err.data);
      });
    };

    return {
      getIPLocation: _getIPLocation
    };
  }]);
