(function() {
    angular
        .module('Tictactoe')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController() {
        var vm = this;

        vm.login = login;

        function login() {
            console.log(vm.user);
        }

    }
})();