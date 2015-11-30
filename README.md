> This library currently doesn't work at the moment, because our dependent API has been shut down. I will update it soon.

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
