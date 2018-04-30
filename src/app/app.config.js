(function() {
    angular
        .module('Tictactoe')
        .config(config);

    function config($stateProvider) {

        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'tpl/tictactoe.tpl.html',
                controller: 'TictactoeController',
                controllerAs: 'vm'
            });

    }
})();