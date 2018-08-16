(function() {
    angular
        .module('Tictactoe')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'tpl/tictactoe.tpl.html',
                controller: 'TictactoeController',
                controllerAs: 'vm'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'tpl/register.tpl.html',
                controller: 'RegisterController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'tpl/login.tpl.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            });

    }
})();