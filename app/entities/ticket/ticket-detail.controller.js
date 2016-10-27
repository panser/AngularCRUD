(function() {
    'use strict';

    angular
        .module('AngularCRUD')
        .controller('TicketDetailController', TicketDetailController);

    TicketDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Ticket', 'Customer'];

    function TicketDetailController($scope, $rootScope, $stateParams, previousState, entity, Ticket, Customer) {
        var vm = this;

        vm.ticket = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('AngularCRUD:ticketUpdate', function(event, result) {
            vm.ticket = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
