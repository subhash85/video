'use strict';
angular
    .module('videoApp')
    .controller('videoController', function ($scope, api) {

        $scope.currentIndex = 0;
        $scope.currentVideo = {
            poster:"http://video-js.zencoder.com/oceans-clip.png",
            type:"mp4",
            message:"This video is about the ocean",
            url:"http://video-js.zencoder.com/oceans-clip.mp4"
        };


        $scope.next = function () {
            getVideo(++$scope.currentIndex);
        };

        $scope.prev = function () {
            getVideo(--$scope.currentIndex);
        };

        $scope.hasPrevVideo =  function(){
            return currentIndex > 1;
        };

        var getVideo = function(index){
            api.getVideo(index).then(function(data){
                if(!data) return;
                $scope.currentVideo = data;
            });
        };

        var init = function(){
            $scope.currentIndex = 0;
            getVideo($scope.currentIndex);
        };

        init();

    });