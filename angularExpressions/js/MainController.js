(function() {
    'use strict';

    var MainController = function MainController() {
        this.myArray = ['my', 'angular', 'app'];
    };

    angular
        .module('app')
        .controller('MainController', MainController);

})();
