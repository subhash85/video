'use strict';
angular
    .module('videoApp')
    .service('api', function($http, $q) {

        var request = function(method, url){
            return $http({method: method, url: url}).then(function(data){
                console.log("success", data);
            }, function(data){
                console.error("failure", data);
            });
        };

        this.getVideo = function(currentIndex) {
            var url = '/video?index='+ currentIndex;
            return request("GET", url);
            /*var deferred = $q.defer();
            setTimeout(function() {
                var ss = { poster:"http://video-js.zencoder.com/oceans-clip.png",
                    type:"mp4",
                    message:"This video is about the ocean",
                    url:"http://video-js.zencoder.com/oceans-clip.mp4"};
                currentVideo = ss;
                deferred.resolve(currentVideo);
            }, 5000);

            return deferred.promise;*/
        };


    });