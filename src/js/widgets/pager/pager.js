'use strict';
angular
    .module('videoApp')
    .directive('pager', function() {
        return {
            restrict: 'E',
            template: '<ul class="pager">' +
                            '<li class="previous" ngclass="{disabled:hasPrevVideo}"><a ng-click="prev()">&larr; Previous</a></li>' +
                            '<li class="next"><a ng-click="next()">Next &rarr;</a></li>' +
                        '</ul>'
        };
    });