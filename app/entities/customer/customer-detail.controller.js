(function() {
    'use strict';

    angular
        .module('AngularCRUD')
        .controller('CustomerDetailController', CustomerDetailController);

    CustomerDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Customer', 'Ticket'];

    function CustomerDetailController($scope, $rootScope, $stateParams, previousState, entity, Customer, Ticket) {
        var vm = this;

        vm.customer = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('AngularCRUD:customerUpdate', function(event, result) {
            vm.customer = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
