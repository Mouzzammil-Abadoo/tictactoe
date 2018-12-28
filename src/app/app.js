(function() {
    'use strict';
    angular
        .module('Tictactoe', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ui.router', 'LocalStorageModule', 'btford.socket-io'])
        .service('SocketService', ['socketFactory', function SocketService(socketFactory) {
            return socketFactory({
                ioSocket: io.connect('http://localhost:8902')
            });
        }]);
})();