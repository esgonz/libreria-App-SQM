LibreriaAppSQM.controller('cultivoController', function($scope,$rootScope, $http, $routeParams) {
    
    $scope.busquedaProgramaIsActive = false;
    
    if ($rootScope.mercado.id=="mx") {
        console.log("cultivoController- Mercado Mexico");
        $scope.busquedaProgramaIsActive = true;
    }

    $rootScope.currentPage = "cultivo";
    $rootScope.currentPageId =  $routeParams.cultivoId;

    /*cultivos*/

    $scope.cultivoIndexData  =  $rootScope.cultivos[$routeParams.cultivoId];

    /*APLICO FILTRO CULTIVO EN LA BARRA DE BUSQUEDA (cultivo seleccionado)*/ 
    //$rootScope.aplicarFiltroCultivo($scope.cultivoIndexData);
    
    $http.get(  $rootScope.baseUrlCultivos   +  $scope.cultivoIndexData.file).success (function(dataCultivo){


    $rootScope.cultivoFicha =  new CultivoNuevo();
        $rootScope.cultivoFicha.setId(dataCultivo.id);
        $rootScope.cultivoFicha.setNombre(dataCultivo.nombre);
        $rootScope.cultivoFicha.setBackground(dataCultivo.background);
        $rootScope.cultivoFicha.setDescripcion(dataCultivo.descripcion);
        $rootScope.cultivoFicha.setEtapas(dataCultivo.etapas);//
        $rootScope.cultivoFicha.setDesordenes(dataCultivo.desordenes);
        $rootScope.cultivoFicha.setVariedadesTecnicas(dataCultivo.variedadesTecnicas);
        $rootScope.cultivoFicha.setVariedades(dataCultivo.variedades);
    
    $scope.desorden = $rootScope.cultivoFicha.desordenes[0];

    //$scope.productosEnCultivo = $rootScope.dictCultivosProductos[$routeParams.cultivoId];
    $rootScope.cultivoFicha.productos = $rootScope.dictCultivosProductos[$routeParams.cultivoId];
    //console.log($rootScope.cultivoFicha);




    });



    $scope.cambiarSlideDesorden =  function (desordenIndex){
        console.log("cultivoController.cambiarSlideDesorden");
        $scope.desorden =  $rootScope.cultivoFicha.desordenes[desordenIndex];
    };

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