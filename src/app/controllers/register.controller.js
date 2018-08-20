(function() {
    angular
        .module('Tictactoe')
        .controller('RegisterController', RegisterController);

    /* @ngInject */
    function RegisterController() {
        var vm = this;

        vm.register = register;

        function register() {
            console.log(vm.user);
        }

    }
})();