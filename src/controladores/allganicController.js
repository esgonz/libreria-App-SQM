/*MainController*/
LibreriaAppSQM.controller("allganicController", function($scope, $rootScope) {
    
    $rootScope.currentPage="allganic";
    //Quitar clase togled del menu principal
    var myNavEl = angular.element( document.querySelector( '#navbar-main' ) );
    myNavEl.removeClass('in');
    
});
