(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;

    }

    MenuSearchService.$inject = ['$http'];

    function MenuSearchService($http) {
        var service = this;

    }

    function FoundItemsDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'path/to/found-items.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
        };

        return directive;
    }
})();
