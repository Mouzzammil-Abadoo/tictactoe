(function() {
    angular
        .module('Tictactoe')
        .controller('RegisterController', RegisterController);

    /* @ngInject */
    function RegisterController(authService, $state) {
        var vm = this;

        vm.register = register;

        function register() {
            authService
                .register(vm.user)
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