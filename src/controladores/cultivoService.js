LibreriaAppSQM.services('cultivoController', function($scope,$rootScope, $http, $routeParams) {
    

    
    $rootScope.currentPage = "cultivos";
    /*cultivos*/

    $scope.cultivoIndexData  =  $rootScope.cultivos[$routeParams.cultivoId];
    $scope.busquedaProgramaIsActive = false;
    if ($rootScope.mercado.id=="mx") {
        console.log("cultivoController- Mercado Mexico");
        $scope.busquedaProgramaIsActive = true;
    }

    $http.get(  $rootScope.baseUrlCultivos   +  $scope.cultivoIndexData.file).success (function(dataCultivo){


    $rootScope.cultivoSeleccionado =  new CultivoNuevo();
        $rootScope.cultivoSeleccionado.setId(dataCultivo.id);
        $rootScope.cultivoSeleccionado.setNombre(dataCultivo.nombre);
        $rootScope.cultivoSeleccionado.setBackground(dataCultivo.background);
        $rootScope.cultivoSeleccionado.setDescripcion(dataCultivo.descripcion);
        $rootScope.cultivoSeleccionado.setEtapas(dataCultivo.etapas);
        $rootScope.cultivoSeleccionado.setDesordenes(dataCultivo.desordenes);
        $rootScope.cultivoSeleccionado.setVariedadesTecnicas(dataCultivo.variedadesTecnicas);
        $rootScope.cultivoSeleccionado.setVariedades(dataCultivo.variedades);
    
    $scope.desorden = $rootScope.cultivoSeleccionado.desordenes[0];


    

    $scope.cambiarSlideDesorden =  function (desordenIndex){
        console.log("cultivoController.cambiarSlideDesorden");
        $scope.desorden =  $rootScope.cultivoSeleccionado.desordenes[desordenIndex];
    };

    


    //$scope.productosEnCultivo = $rootScope.dictCultivosProductos[$routeParams.cultivoId];
    $rootScope.cultivoSeleccionado.productos = $rootScope.dictCultivosProductos[$routeParams.cultivoId];
    //console.log($rootScope.cultivoSeleccionado);

    //Quitar clase togled del menu lateral
    var myEl  =  angular.element( document.querySelector( '#wrapper' ) );
    myEl.removeClass('toggled');

    //Quitar clase togled del menu lateral
    var menulateraldiv = angular.element( document.querySelector( '#sidebar-wrapper' ) );
    menulateraldiv.removeClass('toggled');

    //Quitar clase togled del menu principal
    var myNavEl  =  angular.element( document.querySelector( '#navbar-main' ) );
    myNavEl.removeClass('in');
    });

});