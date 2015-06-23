# Geolocator

Access user's geolocation information

## Installation

> npm install --save aGeolocator

## Example

```
 angular.module('example', ['aGeolocator'])
 .controller('controller', ['Geolocator', function(Geolocator) {
   Geolocator.getIPLocation()
   .then(function(location) {
     console.log('location', location);
   });
 });
``` 
