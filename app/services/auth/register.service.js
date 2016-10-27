(function () {
    'use strict';

    angular
        .module('AngularCRUD')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
