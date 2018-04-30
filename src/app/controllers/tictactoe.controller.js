(function() {
    angular
        .module('Tictactoe')
        .controller('TictactoeController', TictactoeController);

    /* @ngInject */
    function TictactoeController($mdDialog) {
        var vm = this;

        vm.player_one = localStorage.player_one || '';
        vm.player_two = localStorage.player_two || '';

        vm.score = {
            [vm.player_one]: 0,
            [vm.player_two]: 0
        };

        vm.play = play;
        vm.change = change;

        init();

        function init() {

            localStorage.player_one = vm.player_one;
            localStorage.player_two = vm.player_two;

            vm.data = {};

            vm.default = {
                [vm.player_one]: 'X',
                [vm.player_two]: 'O',
                count: 0
            };

            vm.items = new Array(3);
        }

        function change() {
            vm.score = {
                [vm.player_one]: 0,
                [vm.player_two]: 0
            };
            init();
        }


        function play(x, y) {

            if (vm.data[x + '' + y]) {
                return;
            }

            vm.default.count++;

            var currentlyPlayedSymbol = vm.default.count % 2 === 1 ? vm.default[vm.player_one] : vm.default[vm.player_two];
            vm.currentlyPlayed = currentlyPlayedSymbol == 'X' ? vm.player_one : vm.player_two;

            vm.data[x + '' + y] = currentlyPlayedSymbol;

            if (hasWin(currentlyPlayedSymbol)) {
                vm.score[vm.currentlyPlayed]++;
                showAlert(vm.currentlyPlayed + " has won ");
            } else if (vm.default.count == 9) {
                showAlert("It's a draw !");
            }
        }

        function hasWin(symbol) {
            var vertical = 0;
            var horizontal = 0;
            var diagonalFromRight = 0;
            var diagonalFromLeft = 0;

            for (var i = 0; i < 3; i++) {

                vertical = 0;
                horizontal = 0;

                for (var j = 0; j < 3; j++) {
                    if (vm.data[i + '' + j] == symbol) {
                        horizontal++;
                    }
                    if (vm.data[j + '' + i] == symbol) {
                        vertical++;
                    }
                }
                if (vm.data[i + '' + i] == symbol) {
                    diagonalFromLeft++;
                }
                if (vm.data[(2 - i) + '' + i] == symbol) {
                    diagonalFromRight++;
                }
                if (horizontal == 3 || vertical == 3) {
                    return true;
                }
            }
            if (diagonalFromLeft == 3 || diagonalFromRight == 3) {
                return true;
            }
            return false;

        }

        function showAlert(data) {
            $mdDialog.show(
                $mdDialog.confirm()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(false)
                .title(data)
                .textContent('Note that player 1 and player 2 will automatically swap after each game!')
                .ariaLabel('Alert')
                .ok('Play Again')
            ).then(function() {
                var tmp = vm.player_one;
                vm.player_one = vm.player_two;
                vm.player_two = tmp;
                init();
            });
        }
    }
})();