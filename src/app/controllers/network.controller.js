(function() {
    angular
        .module('Tictactoe')
        .controller('NetworkController', NetworkController);

    /* @ngInject */
    function NetworkController(localStorageService, SocketService) {
        var vm = this;

        SocketService.emit('connected', 'test');


    }
})();