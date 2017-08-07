LibreriaAppSQM.controller('busquedaController', function($rootScope,$routeParams, $scope) {
    
    //set Nombre de pagina actual
    $rootScope.currentPage = "busqueda";

    //parametros get enviados por el formulario
    var qryParams = $routeParams.qry.replace("+"," ");
    $scope.QueryFiltro =  qryParams;
    
    //objeto esperando seleccion de filtros
    $scope.filtroActivo = {
        "marca":"",
        "linea":""
    };

    //convierto todos los productos disponibles en un arreglo de string (stringfy)
    var productosStringDB  =  [];

    //labels de cantidad en lineas y marcas
    var marcasQty =  {};
    var lineasQty =  {};
    
    /*Crear arreglo para busqueda, stringify object + object key,value */
    for (var k in $rootScope.productos){
        
        //recorro el objeto y sus elementos
        if ($rootScope.productos.hasOwnProperty(k)) {

            var productoStr = $rootScope.productos[k].id + "+" + $rootScope.productos[k].nombre;
            //stringify object producto
            productoStr =  productoStr + "+" + $rootScope.productos[k].marca + "+" + $rootScope.productos[k].linea + "+" + $rootScope.productos[k].lineaTipo ;
            
            //stringify agregar cultivos
            for (var i  =  0; i < $rootScope.productos[k].cultivos.length; i++) {
                productoStr =  productoStr + "+"+$rootScope.productos[k].cultivos[i];
            }

            //stringify agregar metatags
            for (var t  =  0; t < $rootScope.productos[k].metaTags.length; t++) {
                productoStr =  productoStr + "+"+$rootScope.productos[k].metaTags[t];
            }
            //crear objecto key, value
            var productToList = [productoStr, $rootScope.productos[k]];
            //console.log(productoStr);
            
            //agregar al arreglo
            productosStringDB.push(productToList);
        }
    }

    /*
        Funcion FiltrarQry       

        params 
        @items arreglo de productos stringfy,
        @query  keys buscadas
        return Array ArrayToReturn
     */
    $scope.filtrarQry =  function(items, query) {
        
        if (!query){ 
            return items 
        } // return all items if nothing in query box
        
        var terms  =  query.split(' '); //split query terms by space character
        var arrayToReturn  =  [];
        
        items.forEach(function(item){ // iterate through array of items
            //console.log(item);
            var passTest  =  true;
            terms.forEach(function(term){ // iterate through terms found in query box
                // if any terms aren't found, passTest is set to and remains false
                passTest  =  passTest && (item[0].toLowerCase().indexOf(term.toLowerCase()) > -1);
            });
            // Add item to return array only if passTest is true -- all search terms were found in item
            if (passTest) { 
                arrayToReturn.push(item); 
            }
        });
        return arrayToReturn;
    };
    /*    
        buscar icono en la lista de marcas json  
     */
    $scope.verMarcaFiltro  =  function(marca) {
        
        var indexMarca = $rootScope.marcas.indice[marca][0];
        var marcaReturn  =  $rootScope.marcas.lista[indexMarca];
        return marcaReturn;
    };

    /*    
        buscar icono en la lista de lineas  json 
     */
    $scope.verLineaFiltro  =  function(marcaRef,lineaRef) {
        
        var indexMarca     =    $rootScope.marcas.indice[marcaRef][0];
        var indexLinea     =    $rootScope.marcas.indice[marcaRef][1][lineaRef];
        var lineaReturn    =    $rootScope.marcas.lista[indexMarca].lineas[indexLinea];
        return lineaReturn;
    };

    /*
        modificar el filtro agregando la marca a buscar   
    */
    $scope.modificarFiltroMarca  =  function (marca){
        
        //if (marca ==  $scope.filtroActivo.marca) {
        //    $scope.filtroActivo.marca = "";
        //}else{
            $scope.filtroActivo.linea = "";
            $scope.filtroActivo.marca = marca;
        //}
        $scope.modificarFiltro();
    };

    /*
     modificar el filtro agregando la linea
    
     */
    $scope.modificarFiltroLinea  =  function (linea){
        
        //if (linea ==  $scope.filtroActivo.linea) {
            $scope.filtroActivo.linea = "";
        //}else{
            $scope.filtroActivo.linea = linea;
        //}
        $scope.modificarFiltro();
    };

    /*
     modificar la query de busqueda en base a la marca y la linea seleccionada
    
     */
    $scope.modificarFiltro =  function (){
       
       $scope.QueryFiltro =    $scope.filtroActivo.marca   +  " "   +  $scope.filtroActivo.linea   +  " "   +  qryParams;
       
    };
    


    /*||||||||||||||||||||||||||||||||RESULTADOS*/
    
    $scope.resultados  =   $scope.filtrarQry(productosStringDB, qryParams);

    
    /* Set filtros disponibles*/
    for (var r  =  0; r < $scope.resultados.length; r++) {
        
        var prdObj  =  $scope.resultados[r][1];//resultados[i]1 = objeto producto         
        
        if (marcasQty[prdObj.marcaId]) {
            
            ++marcasQty[prdObj.marcaId][1];//si ya esta dentro del objeto
        } else {
            
            marcasQty[prdObj.marcaId] =  [prdObj.marcaId, 1];//si no esta, agragar nueva key de marca
        }

          
        if (lineasQty[prdObj.lineaTipo]) {
            ++lineasQty[prdObj.lineaTipo][1];
        } else {
            var indexLinea   =    $rootScope.marcas.indice[prdObj.marcaId][1][prdObj.lineaId];
            lineasQty[prdObj.lineaTipo] =  [
                {
                    "tipo": prdObj.lineaTipo,
                    "marcaRef": prdObj.marcaId,
                    "lineaRef": prdObj.lineaId
                },
                1
            ];
        }       
    }
    $scope.filtros = {
        "marcas":marcasQty,
        "lineas":lineasQty
    };

    //JQUERY
    //Quitar clase togled del menu principal
    var myNavEl  =  angular.element( document.querySelector( '#navbar-main' ) );
    myNavEl.removeClass('in');
});