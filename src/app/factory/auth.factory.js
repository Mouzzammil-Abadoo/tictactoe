(function() {
    angular
        .module('Tictactoe')
        .factory('authService', authService);
    /* @ngInject */
    function authService($http, BASEURL) {
        return {
            register: register,
            login: login
        };

        function register(body) {
            return $http.post(BASEURL + "register", body);
        }

        function login(body) {
            return $http.post(BASEURL + "login", body);
        }

    }
})();