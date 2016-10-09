/*global angular*/
(function () {
    'use strict';

    function ListController(list) {
        var vm = this;
        vm.appName = list.appName;
        vm.appDesc = list.appDesc;
    }


    angular
        .module('app')
        .controller('ListController', ListController);



}());
