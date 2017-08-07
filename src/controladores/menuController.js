LibreriaAppSQM.controller('menuController', function($rootScope, $scope) {
  $rootScope.currentPage="";

  $scope.marcasMenu={};
  if ($rootScope.mercado.id =="us") {
    console.log("ITS USA?");
    $scope.marcasMenu.lista=[
      $rootScope.marcas.lista[2],
      $rootScope.marcas.lista[0],
      $rootScope.marcas.lista[1]
    ];
  }else if ($rootScope.mercado.id =="mx") {
    console.log("ITS MEXICO?");
    $scope.marcaUltrasol =$rootScope.marcas.lista[0];
    $scope.marcasMenu.lista=[
      $rootScope.marcas.lista[0],
      $rootScope.marcas.lista[1],
      $rootScope.marcas.lista[2],
      $rootScope.marcas.lista[3],
      $rootScope.marcas.lista[4]
    ];
  }else if ($rootScope.mercado.id =="pe") {
    console.log("ITS USA?");
    
    $scope.marcasMenu.lista=[
      $rootScope.marcas.lista[0],
      $rootScope.marcas.lista[1],
      $rootScope.marcas.lista[2],
      $rootScope.marcas.lista[3],
      $rootScope.marcas.lista[4]
    ];
  }
    
    console.log("LISTA MENU");
    console.log($scope.marcasMenu.lista);
    
  $scope.verProductos = function(marca, linea) {
    

    var indexMarca=$rootScope.marcas.indice[marca][0];
    var indexLinea=$rootScope.marcas.indice[marca][1][linea];

    console.log(indexMarca);
    console.log(indexLinea);
    console.log($rootScope.marcas.lista[indexMarca]);
    $scope.marcaActiva = $rootScope.marcas.lista[indexMarca];
    $scope.lineaActiva = $rootScope.marcas.lista[indexMarca].lineas[indexLinea];
    console.log($scope.lineaActiva);
    

    //Quitar clase togled del menu lateral
        var myEl = angular.element( document.querySelector( '#menuPrincipal-popup' ) );
        myEl.addClass('toggled');  


        //Quitar clase togled del menu principal
        var myNavEl = angular.element( document.querySelector( '#navbar-main' ) );
        myNavEl.removeClass('in');
  };
});