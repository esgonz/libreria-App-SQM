LibreriaAppSQM.controller('menuLateralController', function($rootScope, $scope) {
  

  $scope.marcasMenuLateral={};
  if ($rootScope.mercado.id =="us") {
    console.log("ITS USA?");
    $scope.marcasMenuLateral.lista=[
      $rootScope.marcas.lista[2],
      $rootScope.marcas.lista[0],
      $rootScope.marcas.lista[1]
    ];
  }else if ($rootScope.mercado.id =="mx") {
    console.log("ITS MEXICO?");
    $scope.marcaUltrasol =$rootScope.marcas.lista[0];
    $scope.marcasMenuLateral.lista=[
      $rootScope.marcas.lista[0],     
      $rootScope.marcas.lista[1],
      $rootScope.marcas.lista[2],
      $rootScope.marcas.lista[3],
      $rootScope.marcas.lista[4]
    ];
  }else if ($rootScope.mercado.id =="pe") {
    console.log("ITS PERU?");
    $scope.marcasMenuLateral.lista=[
      $rootScope.marcas.lista[0],
      $rootScope.marcas.lista[1],
      $rootScope.marcas.lista[2],
      $rootScope.marcas.lista[3],
      $rootScope.marcas.lista[4],
      $rootScope.marcas.lista[5]
    ];
  }

  

  $scope.verProductosLateral = function(marca) {   
    //$scope.marcas=["m1","m2", "m3"];
    // var indexMarca=$rootScope.marcas.indice[marca][0];
    // $scope.marcaActiva = $rootScope.marcas.lista[indexMarca];
    // $scope.cssMarcaColor="color-"+marca;
    // console.log($scope.marcaActiva);
  };

  $scope.cerrarMenu = function (){
     $(".lateralMenu").toggleClass("toggled");
  };
});
