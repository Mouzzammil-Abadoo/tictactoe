!function(){"use strict";angular.module("Tictactoe",["ngMaterial","ngMessages","ngAnimate","ui.router"])}(),function(){function config($stateProvider){$stateProvider.state("home",{url:"",templateUrl:"tpl/tictactoe.tpl.html",controller:"TictactoeController",controllerAs:"vm"})}config.$inject=["$stateProvider"],angular.module("Tictactoe").config(config)}(),function(){"use strict";angular.module("Tictactoe")}(),function(){angular.module("Tictactoe").run(function(){})}(),function(){function TictactoeController($mdDialog){var vm=this;function init(){localStorage.player_one=vm.player_one,localStorage.player_two=vm.player_two,vm.data={},vm.default={[vm.player_one]:"X",[vm.player_two]:"O",count:0},vm.items=new Array(3)}function showAlert(data){$mdDialog.show($mdDialog.confirm().parent(angular.element(document.querySelector("#popupContainer"))).clickOutsideToClose(!1).title(data).textContent("Note that player 1 and player 2 will automatically swap after each game!").ariaLabel("Alert").ok("Play Again")).then(function(){var tmp=vm.player_one;vm.player_one=vm.player_two,vm.player_two=tmp,init()})}vm.player_one=localStorage.player_one||"",vm.player_two=localStorage.player_two||"",vm.score={[vm.player_one]:0,[vm.player_two]:0},vm.play=function(x,y){if(vm.data[x+""+y])return;vm.default.count++;var currentlyPlayedSymbol=vm.default.count%2==1?vm.default[vm.player_one]:vm.default[vm.player_two];vm.currentlyPlayed="X"==currentlyPlayedSymbol?vm.player_one:vm.player_two,vm.data[x+""+y]=currentlyPlayedSymbol,function(symbol){for(var vertical=0,horizontal=0,diagonalFromRight=0,diagonalFromLeft=0,i=0;i<3;i++){vertical=0,horizontal=0;for(var j=0;j<3;j++)vm.data[i+""+j]==symbol&&horizontal++,vm.data[j+""+i]==symbol&&vertical++;if(vm.data[i+""+i]==symbol&&diagonalFromLeft++,vm.data[2-i+""+i]==symbol&&diagonalFromRight++,3==horizontal||3==vertical)return!0}return 3==diagonalFromLeft||3==diagonalFromRight}(currentlyPlayedSymbol)?(vm.score[vm.currentlyPlayed]++,showAlert(vm.currentlyPlayed+" has won ")):9==vm.default.count&&showAlert("It's a draw !")},vm.change=function(){vm.score={[vm.player_one]:0,[vm.player_two]:0},init()},init()}TictactoeController.$inject=["$mdDialog"],angular.module("Tictactoe").controller("TictactoeController",TictactoeController)}();