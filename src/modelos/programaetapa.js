/*
    Class Programa
    Technical variable of cultivos 
*/


function ProgramaEtapa() {

 /*|||||||||||||||||||||||||||||||| Atributos */

         this.etapasDisponibles={
            "1":{
                "id":"1",
                "nombre":"Establecimiento",
                "verbose":"establecimiento"
            },
            "2":{
                "id":"2",
                "nombre":"Floración",
                "verbose":"floracion"
            },
            "3":{
                "id":"3",
                "nombre":"Crecimiento",
                "verbose":"crecimiento"
            },
            "4":{
                "id":"4",
                "nombre":"Produccción",
                "verbose":"produccion"
            }
        };

        this.id                     = null;//string id
        this.etapaId                = null;//string etapa id programa
        this.fertilizantes          = [];//array objetos ProgramaFertilizantes
        this.semanasDesde           = null;//int numero semana inicio
        this.semanasHasta           = null;//int numero semana termino
        this.diasAcumulados         = null;//int dias acumulados
        this.nombre                 = "";
        this.verbose                = "";

 /*|||||||||||||||||||||||||||||||| Bloque Getters and Setters */



    
    /*
    Function setId
        id de la solucon Nutritiva
        param id String id
        Return void
    */
    this.setId = function(id){
        this.id = id;
    }

    /*
    Function setEtapaId
        etapa id de la solucon Nutritiva
        param etapaId String etapaId
        Return void
    */
    this.setEtapaId = function(etapaId){
        this.etapaId    =   etapaId;
        this.nombre     =   this.etapasDisponibles[etapaId].nombre;
        this.verbose    =   this.etapasDisponibles[etapaId].verbose;
       //console.log(this.nombre);
    }

    /*
    Function setFertilizante
        objeto fertilizante de la solucon Nutritiva
        param fertilizanteData JSON (object)
        Return void
    */
    this.setFertilizante = function(fertilizanteData){
       var fetilizanteNuevo = new ProgramaFertilizante();

            fetilizanteNuevo.setId(fertilizanteData.id);
            fetilizanteNuevo.setNombre(fertilizanteData.nombre);
            fetilizanteNuevo.setProductoId(fertilizanteData.productoId);
            fetilizanteNuevo.setKgSemana(fertilizanteData.kgSemana);
            fetilizanteNuevo.setKgEtapa(fertilizanteData.kgEtapa);
            fetilizanteNuevo.setKgN(fertilizanteData.kgN);
            fetilizanteNuevo.setKgP2O5(fertilizanteData.kgP2O5);
            fetilizanteNuevo.setKgK2O(fertilizanteData.kgK2O);
            fetilizanteNuevo.setkgCaO(fertilizanteData.kgCaO);
            fetilizanteNuevo.setkgMgO(fertilizanteData.kgMgO);
            fetilizanteNuevo.setConMe(fertilizanteData.conMe);

            fetilizanteNuevo.setContP2O5(fertilizanteData.contP2O5);
            fetilizanteNuevo.setContK2O(fertilizanteData.contK2O);
            fetilizanteNuevo.setContCaO(fertilizanteData.contCaO);
            fetilizanteNuevo.setContMgO(fertilizanteData.contMgO);
            fetilizanteNuevo.setContN(fertilizanteData.contN);

            fetilizanteNuevo.setKgPorSemanas(fertilizanteData.semanas);

        this.addFertilizante(fetilizanteNuevo);
        //console.log("FERTILIZANTE OBJ");
        //console.log(fetilizanteNuevo);
    }

     /*
    Function setFertilizanteHidroponia
        objeto fertilizanteHidroponico de la solucon Nutritiva
        param fertilizanteData JSON (object)
        Return void
    */
    this.setFertilizanteHidroponia = function(fertilizanteData){
       var fetilizanteNuevoHidroponia = new ProgramaFertilizanteHidroponia();

            fetilizanteNuevoHidroponia.setId(fertilizanteData.id);
            fetilizanteNuevoHidroponia.setNombre(fertilizanteData.nombre);
            fetilizanteNuevoHidroponia.setProductoId(fertilizanteData.productoId);
            
            fetilizanteNuevoHidroponia.setConMe(fertilizanteData.conMe);
            fetilizanteNuevoHidroponia.setContP2O5(fertilizanteData.contP2O5);
            fetilizanteNuevoHidroponia.setContK2O(fertilizanteData.contK2O);
            fetilizanteNuevoHidroponia.setContCaO(fertilizanteData.contCaO);
            fetilizanteNuevoHidroponia.setContMgO(fertilizanteData.contMgO);
            fetilizanteNuevoHidroponia.setContN(fertilizanteData.contN);

            fetilizanteNuevoHidroponia.setSnVegetativa(fertilizanteData.snVegetativa);
            fetilizanteNuevoHidroponia.setSnMedia(fertilizanteData.snMedia);
            fetilizanteNuevoHidroponia.setSnGenerativa1(fertilizanteData.snGenerativa1);
            fetilizanteNuevoHidroponia.setSnGenerativa2(fertilizanteData.snGenerativa2);

            fetilizanteNuevoHidroponia.setSolucionesNutritivas(fertilizanteData.soluciones);
            
        this.addFertilizante(fetilizanteNuevoHidroponia);
        //console.log("FERTILIZANTE HIDROP OBJ");
        //console.log(fetilizanteNuevoHidroponia);
    }

    /*
    Function setSemanasDesde
        semana desde
        param desde String semana desde
        Return void
    */
    this.setSemanasDesde = function(desde){
        this.semanasDesde = desde;
    }

    /*
    Function setSemanasHasta
        semana hasta
        param hasta String semana hasta
        Return void
    */
    this.setSemanasHasta = function(hasta){
        this.semanasHasta = hasta;
    }

    /*
    Function setDiasAcumulados
        total dias acumulados del programa
        param diasAcumulados String dias
        Return void
    */
    this.setDiasAcumulados = function(diasAcumulados){
        this.diasAcumulados = diasAcumulados;
    }

    /*
    Function addFertilizante
        agrega 1 objeto Fertilizante a la lista de fertilizantes
        param fertilizanteObj ProgramaFertilizanteHidroponia/ProgramaFertilizante  fertilizante
        Return void
    */
    this.addFertilizante = function(fertilizanteObj){
        this.fertilizantes.push(fertilizanteObj);
    }

    /*
    Function getTotales
        obtiene el total de nutrientes aportados
        Return String Object
    */
    this.getTotales = function(){
        console.log("ProgramaEtapa.getTotales");

        var totales ={
        	"totalN":0,
        	"totalP2O5":0,
        	"totalK2O":0,
        	"totalCa0":0,
        	"totalMg0":0,
        	"totalMe":"-"
        };      


        for (var i = 0; i < this.fertilizantes.length; i++) {
             var auxFertilizante = this.fertilizantes[i];
                totales.totalN      = parseFloat(totales.totalN + auxFertilizante.kgN);
                totales.totalP2O5   = parseFloat(totales.totalP2O5 + auxFertilizante.kgP2O5);
                totales.totalK2O    = parseFloat(totales.totalK2O + auxFertilizante.kgK2O);
                totales.totalCa0    = parseFloat(totales.totalCa0 + auxFertilizante.kgCaO);
                totales.totalMg0    = parseFloat(totales.totalMg0 + auxFertilizante.kgMgO);
        }
       return totales;
    }

    /*
    Function getEtapaById
        obtiene la etapa segun el id
        Return String
    */
    this.getEtapaById = function(etapaId){
        console.log("ProgramaEtapa.getEtapaNombre");
        for (var i = 0; i < this.etapasDisponibles.length; i++) {
            var auxEtapaDis= this.etapasDisponibles[i];
             if (auxEtapaDis.id == etapaId) {
                    //console.log(auxEtapaDis.id + "=" +etapaId);
                    this.nombre=auxEtapaDis.nombre;
                    this.verbose=auxEtapaDis.verbose;
                }else{
                    this.nombre="";
                    this.verbose="";
                }
            //console.log(this.nombre);
        }     
    }

 /*|||||||||||||||||||||||||||||||| Bloque Funciones */

}



