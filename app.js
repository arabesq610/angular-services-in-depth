/*global angular*/
(function () {
    'use strict';
    angular
        .module('app', [])
        .provider('list', function () {
            var appName,
                appDesc,
                appVersion,
                includeVersionInTitle;

            appVersion = '1.0';
            appName = 'List App';
            appDesc = 'A list of things';
            includeVersionInTitle = false;

            this.$get = function () {
                var publicObj = {};

                publicObj.appName = appName;
                if (includeVersionInTitle) {
                    publicObj.appName = appName + ' ' + appVersion;
                }

                publicObj.appDesc = appDesc;
                publicObj.appVersion = appVersion;

                return publicObj;
            };

            this.setIncludeVersionInTitle = function (value) {
                includeVersionInTitle = value;
            };

        })
        .config(function (listProvider) {
            listProvider.setIncludeVersionInTitle(false);
        });
}());
