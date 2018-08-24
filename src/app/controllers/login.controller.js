(function() {
    angular
        .module('Tictactoe')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController(authService, $state) {
        var vm = this;

        vm.login = login;

        function login() {
            authService
                .login(vm.user)
                .then(function(res) {
                    localStorage.token = res.data.token;
                    $state.go('network');
                })
                .catch(function(error) {
                    vm.displayError = error.data;
                });
        }

    }
})();