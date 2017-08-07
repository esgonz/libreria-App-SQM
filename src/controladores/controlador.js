var LibreriaAppSQM = angular.module('LibreriaAppSQM', ['LocalStorageModule','ngRoute']);
var debugMode = false;
var varMercado = "usa";

//Configurar localstorage
LibreriaAppSQM.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
    .setPrefix('LibreriaAppSQM' + varMercado);
});

//cambiar plantillas si el amrcado es mexico
if (varMercado=="mexico"){
    LibreriaAppSQM.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl: 'vistas/login.html',
                    controller: 'loginController'
                })

                .when('/busqueda/:qry', {
                    templateUrl: 'vistas/busqueda.html',
                    controller: 'busquedaController'
                })

                .when('/producto/:productoId', {
                    templateUrl: 'vistas/producto_mx.html',
                    controller: 'productoController'
                })

                .when('/cultivo/:cultivoId', {
                    templateUrl: 'vistas/cultivo.html',
                    controller: 'cultivoController'
                })

                .when('/menu', {
                    templateUrl: 'vistas/menuPrincipal_mx.html',
                    controller: 'menuController'
                })

                .when('/allganic', {
                    templateUrl: 'vistas/allganic.html',
                    controller: 'allganicController'
                })

                .when('/programa', {
                    templateUrl: 'vistas/programa.html',
                    controller: 'programaController'
                })

                .otherwise({
                    redirectTo: '/login'
                });
        }]);
}else{
    LibreriaAppSQM.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl: 'vistas/login.html',
                    controller: 'loginController'
                })

                .when('/busqueda/:qry', {
                    templateUrl: 'vistas/busqueda.html',
                    controller: 'busquedaController'
                })

                .when('/producto/:productoId', {
                    templateUrl: 'vistas/producto.html',
                    controller: 'productoController'
                })

                .when('/cultivo/:cultivoId', {
                    templateUrl: 'vistas/cultivo.html',
                    controller: 'cultivoController'
                })

                .when('/menu', {
                    templateUrl: 'vistas/menuPrincipal.html',
                    controller: 'menuController'
                })

                .when('/allganic', {
                    templateUrl: 'vistas/allganic.html',
                    controller: 'allganicController'
                })

                .when('/programa', {
                    templateUrl: 'vistas/programa.html',
                    controller: 'programaController'
                })

                .otherwise({
                    redirectTo: '/login'
                });
        }]);
}



/* Main Activity*/
LibreriaAppSQM.run(function($rootScope, $http) {
    
    $rootScope.mercadosDisponibles ={
        "usa":{
            "id":           "us",
            "nombre":       "USA",
            "lang":         "en",
            "version":      "0.0.4"
        },
        "peru":{
            "id":           "pe",
            "nombre":       "Perú",
            "lang":         "es",
            "version":      "1.1.6"
        },
        "mexico":{
            "id":           "mx",
            "nombre":       "México",
            "lang":         "es",
            "version":      "0.2.0"
        }
    };
    $rootScope.mercado = $rootScope.mercadosDisponibles[varMercado];


    $rootScope.baseUrlProductos     = "src/data/"+$rootScope.mercado.id+"/productos/";
    $rootScope.baseUrlCultivos      = "src/data/"+$rootScope.mercado.id+"/cultivos/cultivos-json/"; 
    $rootScope.baseUrlIconos        = "src/img/icons/";
    $rootScope.currentPage          = "";    
    $rootScope.currentPageId        = "";
    $rootScope.volverCollapse       = "";
    $rootScope.strings              = {};
    //$scope.marcas = null;




    $http.get('src/data/lenguajes/'+$rootScope.mercado.lang+'/strings.json').success (function(dataStrings){


        for (var string in dataStrings) {
            if (dataStrings.hasOwnProperty(string)) {
                var stringK  =   dataStrings[string];
                $rootScope.strings[stringK.string_name]=stringK.string_value;
            }
        }

    });


    $http.get('src/data/'+$rootScope.mercado.id+'/productos/productos.json').success (function(data){

        /*Lista con todas las marcas, lineas , productos*/

        $rootScope.marcas = data;


        var productos =  {};

        for (var i = 0; i < $rootScope.marcas.lista.length; i++) {

            var lineas = $rootScope.marcas.lista[i].lineas;


            for (var j = 0; j < lineas.length; j++) {

                var listaProductos = lineas[j].productos;

                for (var k = 0; k < listaProductos.length; k++) {
                    var prd             = {};
                    prd.key             = listaProductos[k].id;                
                    prd.obj             = listaProductos[k];
                    prd.obj.baseUrl     = $rootScope.marcas.lista[i].baseUrl;
                    prd.obj.marca       = $rootScope.marcas.lista[i].nombre;
                    prd.obj.linea       = lineas[j].nombre;
                    prd.obj.marcaId     = $rootScope.marcas.lista[i].id;
                    prd.obj.lineaId     = lineas[j].id;
                    prd.obj.lineaTipo   = lineas[j].tipo;    
                    prd.obj.marcaImg    = $rootScope.marcas.lista[i].img;          
                    productos[prd.key]  = prd.obj; 
                }            
            }
        }

        /*lista con todos los productos*/
        $rootScope.productos = productos;
   
    });//end get productos.json

    $http.get('src/data/'+$rootScope.mercado.id+'/cultivos/cultivos.json').success (function(dataCultivos){
        /*Lista con todos los cultivos*/     

        $rootScope.cultivos = dataCultivos;
        $rootScope.cultivosPrograma =
                [
                    {     
                        "id":"0020",
                        "verbose":"pimiento",
                        "nombre":"Pimiento",
                        "icon":"img_pimiento1.png",
                        "iconColor":"img_pimiento2.png",
                        "file":"pimiento.json"
                    },
                    {
                        "id":"0023",
                        "verbose":"tomate",
                        "nombre":"Tomate",
                        "icon":"img_tomate1.png",
                        "iconColor":"img_tomate2.png",
                        "file":"tomate.json"
                    }
                ];


        var dictCultivosDisable = {};
        var dictCultivos ={};
        var dictCultivosProductos ={};

        for (var cl in $rootScope.cultivos) {
            if ($rootScope.cultivos.hasOwnProperty(cl)) {

                var cultivoK  =   $rootScope.cultivos[cl];
                //console.log(">>recorrer cultivos..");
                dictCultivosProductos[cultivoK.id]=[];
                for (var pr in $rootScope.productos) {
                    //console.log(">>recorrer productos..");

                    if ($rootScope.productos.hasOwnProperty(pr)) {
                        var productoK = $rootScope.productos[pr];

                        for (var i = 0; i < productoK.cultivos.length; i++) {
                            var productoCultivo= productoK.cultivos[i];


                            if (cultivoK.verbose == productoCultivo) {                      
                                dictCultivosProductos[cultivoK.id].push(productoK);
                                //alert("encontre cultivo: "+cultivoK.verbose + " en: "+ productoK.id);
                            }
                        }             

                    }
                }
            }
        }

        $rootScope.dictCultivosProductos = dictCultivosProductos;


        for (var cl2 in $rootScope.cultivos) {

            if ($rootScope.cultivos.hasOwnProperty(cl2)) {

                var cultivoK2  =   $rootScope.cultivos[cl2];
                dictCultivos[cultivoK2.verbose]=cultivoK2;
            }
        }

        for (var cl3 in dictCultivosDisable) {

            if (dictCultivosDisable.hasOwnProperty(cl3)) {

                var cultivoK3  =   dictCultivosDisable[cl3];
                dictCultivos[cl3]=cultivoK3;
            }
        }
        $rootScope.dictCultivos = dictCultivos;

    });//end get cultivos.json

});//end run angular


/*Filtro de texto html*/
LibreriaAppSQM.filter('to_trusted', ['$sce', function($sce){

    return function(text) {

        return $sce.trustAsHtml(text);
    };
}]);


/*Filtro de busqueda*/
LibreriaAppSQM.filter('and', function($log) {
    return function(items, query) {

        if (!query) return items; // return all items if nothing in query box

        var terms = query.split(' '); //split query terms by space character
        var arrayToReturn = [];

        items.forEach(function(item){ // iterate through array of items
        //console.log(item);
        var passTest = true;
        terms.forEach(function(term){ // iterate through terms found in query box
        // if any terms aren't found, passTest is set to and remains false

        passTest = passTest && (item[0].toLowerCase().indexOf(term.toLowerCase()) > -1);

    });
        // Add item to return array only if passTest is true -- all search terms were found in item
        if (passTest) { arrayToReturn.push(item); }

    });

        return arrayToReturn;

    };

});

/*Filtro Order By String */
LibreriaAppSQM.filter('orderObjectBy', function(){
    
    return function(input, attribute) {
        
        if (!angular.isObject(input)) return input;

        var array = [];
        for(var objectKey in input) {

            array.push(input[objectKey]);
        }

        array.sort(

            function (a,b) {

                if (a[attribute] < b[attribute])
                    return -1;
                if (a[attribute] > b[attribute])
                    return 1;
                return 0;
            }

        );
        return array;
    };
});

LibreriaAppSQM.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});





/*MainController*/
LibreriaAppSQM.controller("mainController", function($scope, $rootScope, $http, $routeParams) {

    $rootScope.filtrosActivosPrograma       = {
        "zona"          :     null,
        "cultivo"       :     null,
        "variedad"      :     null,
        "condicion"     :     null,
        "tecnificacion" :     null
    };

    $rootScope.opcionesFiltroCultivo        = {};
    $rootScope.opcionesFiltroVariedad       = {};
    $rootScope.opcionesFiltroCondicion      = {};
    $rootScope.opcionesFiltroTecnificacion  = {};
    $rootScope.inputBuscar                  = "    ";
    $rootScope.menuType                     = "productos";
    $scope.inputPassword                    = "";
    $scope.inputEmail                       ="";

    $scope.buscar = function(qry) {

        qry.replace(" ", "+");
        window.location = "index.html?#/busqueda/+" + qry;
    };


    

    /*
    Function aplicarFiltrotecnificacion
        param
        return
     */
    $rootScope.verCultivosMenu = function() {
        $rootScope.menuType = "cultivos";
    };

    /*
    Function aplicarFiltrotecnificacion
        param
        return
     */
    $rootScope.verProductosMenu = function() {
        $rootScope.menuType = "productos";
    };

    /*
    Function aplicarFiltrotecnificacion
        param
        return
     */
    $rootScope.atrasFunc= function (){
        if ($rootScope.volverCollapse != "") {

            $(".basicContent").show();
            $("#etapasContent").hide();
            $("#programaContent").hide();
            $("#desordenesContent").hide();
            $("#extraContent").hide();
            $rootScope.volverCollapse = "";
        }else{

            parent.history.back();
        }
    };

    /*
    Function aplicarFiltrotecnificacion
        param
        return
     */
    $rootScope.setVolver = function (pagina, id, divId){

        if ($rootScope.volverCollapse  ==  "") {

            $rootScope.volverCollapse = pagina + '/' + id;
            //alert( pagina+"/"+id);

            if (divId == "etapasContent") {

                $("#etapasContent").show();
                $("#etapasContent").removeClass("esconder");

            }else if (divId == "programaContent") {

                $("#programaContent").show();
                $("#programaContent").removeClass("esconder");

            }else if(divId == "desordenesContent"){

                $("#desordenesContent").show();
                $("#desordenesContent").removeClass("esconder");

            }
            else if(divId == "extraContent"){

                $("#extraContent").show();
                $("#extraContent").removeClass("esconder");

            }

            $(".basicContent").hide();
        }else{

            $rootScope.atrasFunc();
        }
    };


    /*BUSQUEDA DE PROGRAMA*/


    /*
    Function aplicarFiltroZona
        param
        return
     */
    $rootScope.aplicarFiltroZona = function (indexZona){
        
        console.log("controlador.aplicarFiltroZona");
        
        //SOLO PARA PRUEBAS INCIALES, REMPLAZAR POR BUSQUEDA Y REFERENCIA A LAS ZONAS DE LOS PROGRAMAS NUTRICIONALES
        //filtro activo - variedad 
        $rootScope.filtrosActivosPrograma.zona = "zona central";

        

        console.log("filtrosActivosPrograma - zona");
        console.log($rootScope.filtrosActivosPrograma);

    };

    /*
    Function aplicarFiltroCultivo
        param
        return
     */
    $rootScope.aplicarFiltroCultivo = function (cultivoIndexObj){
        
        console.log("controlador.aplicarFiltroCultivo");
        $http.get(  $rootScope.baseUrlCultivos   +  cultivoIndexObj.file).success (function(dataCultivo){      
            
            var cultivoObj =  new CultivoNuevo();
            cultivoObj.setId(dataCultivo.id);
            cultivoObj.setNombre(dataCultivo.nombre);
            cultivoObj.setBackground(dataCultivo.background);
            cultivoObj.setDescripcion(dataCultivo.descripcion);
            cultivoObj.setEtapas(dataCultivo.etapas);
            cultivoObj.setDesordenes(dataCultivo.desordenes);
            cultivoObj.setVariedadesTecnicas(dataCultivo.variedadesTecnicas);
            cultivoObj.setVariedades(dataCultivo.variedades);
            cultivoObj.productos = $rootScope.dictCultivosProductos[$routeParams.cultivoId];

                //Informacion de la lista basica de cultivo
                cultivoObj.verbose      = cultivoIndexObj.verbose;
                cultivoObj.file         = cultivoIndexObj.file;
                cultivoObj.icon         = cultivoIndexObj.icon;
                cultivoObj.iconColor    = cultivoIndexObj.iconColor;



                

            //filtro activo - cultivo        
            $rootScope.filtrosActivosPrograma.cultivo = cultivoObj;
                //borrar filtros dependientes
                /*$rootScope.opcionesFiltroVariedad = null;
                $rootScope.opcionesFiltroCondicion = null;
                $rootScope.opcionesFiltroTecnificacion = null;*/
            //sera el objeto base para modificar los siguientes filtros
            $rootScope.opcionesFiltroCultivo = cultivoObj;
            
            //opciones para el filtro variedades
            $rootScope.opcionesFiltroVariedad = cultivoObj.variedades;

            console.log("filtrosActivosPrograma - cultivo");
            console.log($rootScope.filtrosActivosPrograma);
        });


    };

    /*
    Function aplicarFiltrotecnificacion
        param
        return
     */
    $rootScope.aplicarFiltroVariedad      = function (indexVariedad){               

        console.log("controlador.aplicarFiltroVariedad");
        //  inspeccionar el cultivo base en busqueda de variedades tecnicas
        $rootScope.cultivoObjetivoFiltro = $rootScope.opcionesFiltroCultivo; //desde indexParametro seteado en cultivo anteriormente       

        

        // Si el indice es mayor a 0, significa selecciono una variedad del cultivo
        //  inspeccionar VARIEDADES TECNICAS  de las variedades de cultivo
        if (indexVariedad >= 0 ) {
            console.log("filtrarProgramaCultivo - inspeccionar variedades tecnicas");
            $rootScope.cultivoObjetivoFiltro = $rootScope.opcionesFiltroCultivo.variedades[indexVariedad];
        }

        
        //filtro activo - variedad 
        $rootScope.filtrosActivosPrograma.variedad = $rootScope.cultivoObjetivoFiltro;

        
        var auxOpcionesCondicion =[];
        //buscando condiciones en las variedades tecnicas del cultivo objetivo
        for (var varIndex  =  0; varIndex < $rootScope.cultivoObjetivoFiltro.variedadesTecnicas.length; varIndex++) {
            
            var auxVariedadTecnica  =  $rootScope.cultivoObjetivoFiltro.variedadesTecnicas[varIndex];
            auxOpcionesCondicion.push(auxVariedadTecnica.condicionId);

        }

        //Buscar en el arreglo de condiciones, para mostrar en el selectbox
        for (var condIndex  =  0; condIndex < $rootScope.cultivoObjetivoFiltro.condiciones.length; condIndex++) {
            var auxCondicion = $rootScope.cultivoObjetivoFiltro.condiciones[condIndex];
            var exists = auxOpcionesCondicion.indexOf(auxCondicion.id);
            if (exists >= 0) {

                $rootScope.opcionesFiltroCondicion[auxCondicion.id] = auxCondicion; 
            }
        }
        console.log("filtrosActivosPrograma - variedad");
        console.log($rootScope.filtrosActivosPrograma);
    };
    /*
    Function aplicarFiltrotecnificacion
        param
        return
     */
    $rootScope.aplicarFiltroCondicion      = function (idCondicion){
        console.log("controlador.aplicarFiltroCondicion");

        //filtro activo - condicion 
        $rootScope.filtrosActivosPrograma.condicion = $rootScope.opcionesFiltroCondicion[idCondicion];        
        var auxOpcionesTecnificaciones =[];
        
        //buscando tecnificaciones en las variedades tecnicas del cultivo objetivo
        for (var varIndex  =  0; varIndex < $rootScope.cultivoObjetivoFiltro.variedadesTecnicas.length; varIndex++) {

            var auxVariedadTecnica  =  $rootScope.cultivoObjetivoFiltro.variedadesTecnicas[varIndex];
            //variedad tecnica.condicionId  ==  a la seleccionada, variedad tecnica.tecnificacion se agrega al selectbox        
            
            if (auxVariedadTecnica.condicionId  ==  idCondicion) {

                auxOpcionesTecnificaciones.push(auxVariedadTecnica.tecnificacionId);
            }
        }
        

        //Buscar en el arreglo de tecnificaciones, para mostrar en el selectbox
        for (var tecIndex  =  0; tecIndex < $rootScope.cultivoObjetivoFiltro.condiciones.length; tecIndex++) {
            var auxTecnificacion = $rootScope.cultivoObjetivoFiltro.tecnificaciones[tecIndex];
            var existsTecnificacion = auxOpcionesTecnificaciones.indexOf(auxTecnificacion.id);

            if (existsTecnificacion >= 0) {
                $rootScope.opcionesFiltroTecnificacion[auxTecnificacion.id] = auxTecnificacion; 
            }
        }

    };

    /*
    Function aplicarFiltrotecnificacion
        param
        return
     */
    $rootScope.aplicarFiltrotecnificacion      = function (idTecnificacion){
        console.log("controlador.aplicarFiltrotecnificacion");

        //filtro activo - tecnificacion 
        $rootScope.filtrosActivosPrograma.tecnificacion = $rootScope.opcionesFiltroTecnificacion[idTecnificacion];

    };



});





