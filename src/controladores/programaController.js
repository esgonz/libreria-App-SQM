LibreriaAppSQM.controller('programaController', function($scope,$rootScope, $http, $routeParams) {
   


    $scope.programaTablaData                = null;
    $scope.programaTablaDataDistribucion    = null;
    $scope.programaTipo                     = 1;
    $scope.programas                        = [];
    $scope.programaTablaData                = null;
    $scope.estadoPograma                    = false;
    
    



    $scope.buscarPrograma  =  function(){

        
        console.log("cultivoController.buscarPrograma");

        if ($rootScope.filtrosActivosPrograma.variedad  !== null &&
            $rootScope.filtrosActivosPrograma.condicion  !== null &&
            $rootScope.filtrosActivosPrograma.tecnificacion  !== null ) {

        
  
            var variedadIdBuscar         = $rootScope.filtrosActivosPrograma.variedad.id;
            var condicionIdBuscar        = $rootScope.filtrosActivosPrograma.condicion.id;
            var tecnificacionIdBuscar    = $rootScope.filtrosActivosPrograma.tecnificacion.id;

            //cargar lista de programas
            $http.get('src/data/'+$rootScope.mercado.id+'/programas/programas.json').success (function(dataprogramas){

                //covertir el array en un diccionario key (id) - objeto
                for (var programa in dataprogramas) {
                    
                    if (!dataprogramas.hasOwnProperty(programa)) {
                        console.log("hasOwnProperty Error");
                        return false;
                    }


                    var programaKey                     =  dataprogramas[programa];
                    var flagProgramaCultivoExiste       =  false;
                    var flagProgramaCondicionExiste     =  false;
                    var flagProgramaTecnificacionExiste =  false;
                    
                    //revisar si el programa coincide en algun cultivo con el cultivo seleccionado
                    for (var progClIndex  =  0; progClIndex < programaKey.programaCultivos.length; progClIndex++) {

                        var cultivoIdAux =  programaKey.programaCultivos[progClIndex];
                        if (cultivoIdAux == variedadIdBuscar) {
                            //console.log("variedadIdBuscar Encontrada");
                            //console.log(variedadIdBuscar);
                            flagProgramaCultivoExiste = true;
                        }else{
                            console.log("flagProgramaCultivoExiste - false");
                            console.log(variedadIdBuscar);
                        }
                    }


                    //revisar si el programa coincide en alguna condicion con la condicion seleccionada
                    for (var progConIndex  =  0; progConIndex < programaKey.programaCondiciones.length; progConIndex++) {

                        var CondicionIdIndex =  programaKey.programaCondiciones[progConIndex];
                        if (CondicionIdIndex == condicionIdBuscar) {
                            flagProgramaCondicionExiste = true;
                        }else{
                            console.log("flagProgramaCondicionExiste - false");
                            console.log(condicionIdBuscar);
                        }
                    }

                    //revisar si el programa coincide en alguna tecnificacion con la tecnificacion seleccionada
                    for (var progTecIndex  =  0; progTecIndex < programaKey.programaTecnificaciones.length; progTecIndex++) {

                        var TecnificacionIdIndex =  programaKey.programaTecnificaciones[progTecIndex];
                        if (TecnificacionIdIndex == tecnificacionIdBuscar) {

                            flagProgramaTecnificacionExiste = true;
                        }else{
                            console.log("flagProgramaTecnificacionExiste - false");
                            console.log(tecnificacionIdBuscar);
                        }
                    }

                    //si coincide con los parametros de busuqueda lo agrego al arreglo
                    if (flagProgramaCultivoExiste && flagProgramaCondicionExiste && flagProgramaTecnificacionExiste ) {
                        console.log("programaKey:");
                        console.log(programaKey);
                        //$scope.setPrograma(programaKey);
                        $scope.setProgramaImg(programaKey.programaFile);
                
                        
                    }else{
                        console.log("flags Problems");
                    }
                
                }

            });//end http get
        }else{
            console.log("filtroPrograma cant be NULL");
            return false;
        }
        

    };

    $scope.getPrograma  =  function(programa){
        $http.get('src/data/'+$rootScope.mercado.id+'/programas/programas-json/'+programa.programaFile).success (function(programaDataObject){
            console.log("cultivoController.getPrograma");
            //console.log(programaDataObject);
            //
            //alert($rootScope.filtrosActivosPrograma.cultivo.nombre);
            
            
            
            $scope.setPrograma(programaDataObject);
        });
    };


    $scope.setProgramaImg = function (imgUrl){
        console.log("cultivoController.setPrograma");
        
        

        var programa = new Programa();
        programa.setImgUrl(imgUrl);

       
        $scope.programas.push(programa);

        
           //si todo esta bien, cambiar estadoPrograma
            /*if($rootScope.filtrosActivosPrograma.cultivo.nombre =='Tomate' || $rootScope.filtrosActivosPrograma.cultivo.nombre =='Pimiento'  ){
              
               $scope.estadoPograma = true;               
            }*/
        $scope.estadoPograma = true; 
        
        
    };
    $scope.crearPDF= function (){

        console.log("tablaPDF");
        if ($scope.programas[0] ===undefined) {
            console.log("sin Programa");
            alert("No se encontró un Programa para enviar por correo.\nAsegúrese de seleccionar variedad de Cultivo, condición y tecnificación.");
            return false;
        }else{

            var tituloPrograma = $rootScope.filtrosActivosPrograma.variedad.nombre + '-' + $rootScope.filtrosActivosPrograma.condicion.condicion + '-' + $rootScope.filtrosActivosPrograma.tecnificacion.tecnificacion;
            var nombreProgramaAux = Date.now()+'_'+tituloPrograma;
            var nombrePrograma = nombreProgramaAux.substring(0, 45);

            var pdfformat = null;
            if ($scope.programaTipo == 1) {
                pdfformat=$scope.programas[0].tablaPDF(tituloPrograma, $scope.programaTablaData, $scope.programaTablaDataDistribucion);
            }
            else if ($scope.programaTipo == 2) {
                pdfformat=$scope.programas[0].tablaPDFHidroponia(tituloPrograma, $scope.programaTablaData, $scope.programaTablaDataSolucionNutritiva);
            }
            
            if (debugMode) {
                
                //para browser
                pdfformat[1].save('table.pdf');
            }else{

                //para android
                savePDF(nombrePrograma, pdfformat[1]);
            }
        }
        
        $scope.programaTablaData   = null;
        $scope.programaTablaDataDistribucion = null;
    };

    var savePDF = function ( vname, doc){

        console.log("savePDF");
        //Se le asigna el nombre al Certificado de Trabajo --- y el lugar donde se va a almacenar este Certificado
        //para que luego sea adjuntado al Correo

        var name = vname + ".pdf";

        var attach = "file:///sdcard/" + name; //version stackoverflow solucion attach

        //var pdfOutput = doc.output();
        var blob = doc.output();
        window.open(URL.createObjectURL(blob));
        /*
        //NEXT SAVE IT TO THE DEVICE'S LOCAL FILE SYSTEM
        //PERSISTENT == MEMORIA SD
        console.log("file system...");
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

        fileSystem.root.getFile(name, {create: true}, function(entry) {
            var fileEntry = entry;




        entry.createWriter(function(writer) {
            writer.onwrite = function(evt) {
                console.log("write success");

        //se llama a la funcion para enviar por correo electronico;
        attachCorreo( name, attach);

        };

        console.log("writing to file ok");
        writer.write( pdfOutput );

        }, function(error) {
            console.log(error);
        });

        }, function(error){
            console.log(error);
        });
        },
        function(event){
            console.log( evt.target.error.code );
        });
        */
    };
    var attachCorreo = function (name, urlAttach){
        //alert("enviar correo");
        console.log("attachCorreo");
        console.log(">>URL: "+urlAttach);
        // this is the complete list of currently supported params you can pass to the plugin (all optional)
        var options = {
        message: 'Su Programa Nutricional "'+ name +'" generado por la Aplicacion SQM.', // not supported on some apps (Facebook, Instagram)
        subject: 'Programa Nutricional - Aplicacion SQM', // fi. for email
        chooserTitle: 'Selecciona una Aplicacion Para compartir' // Android only, you can override the default share sheet title
        };

        cordova.plugins.email.open({
            to:      '',
            cc:      '',
            bcc:     [],
            subject: options.subject,
            body:    options.message,
        attachments: urlAttach, //=> Android
        });
    };

    //ejecuto al iniciar el controlador
    $scope.buscarPrograma();

    $scope.sharePhoto = function sharePhoto() {
     var imageLink;
            console.log('Calling from CapturePhoto');
            navigator.screenshot.save(function(error,res){
            if(error){
            console.error(error);
            }else{
            console.log('ok',res.filePath); //should be path/to/myScreenshot.jpg
            //For android
            imageLink = res.filePath;
            window.plugins.socialsharing.share(null, null,'file://'+imageLink, null);

           //For iOS
           //window.plugins.socialsharing.share(null,   null,imageLink, null)
     }
     },'jpg',50,'myScreenShot');
    };

});