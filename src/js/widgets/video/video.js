'use strict';
angular
    .module('videoApp')
    .directive('videoJs', function () {
        return {
            restrict:'E',
            template:'<video class="video-js vjs-default-skin vjs-big-play-centered center-block" controls preload="none" width="640" height="264" poster="{{currentVideo.poster}}" data-setup="{}"><source src="{{currentVideo.videoSrc}}" type="video/mp4" /><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p></video><h4>{{currentVideo.message}}</h4>',
            controller:function ($scope, $sce, api) {


            }
        };
    });