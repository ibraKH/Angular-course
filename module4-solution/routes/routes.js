// routes/routes.js
(function () {
    'use strict';
  
    angular.module('MenuApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      // Define your routes here
      // Example:
      $stateProvider
        .state('home', {
          url: '/',
          template: '<h1>Welcome to our Restaurant</h1>'
        })
        .state('categories', {
          url: '/categories',
          templateUrl: 'templates/categories.template.html',
          controller: 'CategoriesController',
          controllerAs: 'categoriesCtrl',
          resolve: {
            categories: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
        })
        .state('items', {
          url: '/items/{categoryShortName}',
          templateUrl: 'templates/items.template.html',
          controller: 'ItemsController',
          controllerAs: 'itemsCtrl',
          resolve: {
            items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
          }
        });
  
      $urlRouterProvider.otherwise('/');
    }
  })();
  