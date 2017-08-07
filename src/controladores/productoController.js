LibreriaAppSQM.controller('productoController', function($scope,$rootScope, $http, $routeParams) {
  

   $rootScope.currentPage="producto";
   $rootScope.currentPageId =  $routeParams.productoId;

  /*cultivos*/
  $scope.productoIndexData = $rootScope.productos[$routeParams.productoId];
        //console.log($scope.productoIndexData);
        $http.get($scope.productoIndexData.baseUrl+$scope.productoIndexData.file).success (function(dataProducto){
        //Lista con todos los cultivos
        //$scope.producto= new Person();
        //producto.parseData(dataProducto);
        //$scope.producto = tempProducto;
        //console.log($scope.producto);
        $scope.producto = new Producto(dataProducto);
        $scope.producto.verbose=$scope.productoIndexData.verbose;
        $scope.producto.cultivos=$scope.productoIndexData.cultivos;
        
        




        console.log($scope.producto);



        
      });

      //Quitar clase togled del menu lateral
        var menulateraldiv = angular.element( document.querySelector( '#sidebar-wrapper' ) );
        menulateraldiv.removeClass('toggled');

        //Quitar clase togled del menu principal
        var myNavEl = angular.element( document.querySelector( '#navbar-main' ) );
        myNavEl.removeClass('in');
    });