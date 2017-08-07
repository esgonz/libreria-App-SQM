/*
    Class ProgramaFertilizanteHidroponia
    Technical variable of cultivos 
*/

function ProgramaFertilizanteHidroponia(){

 /*|||||||||||||||||||||||||||||||| Atributos */

        this.id         = null;
        this.nombre     = null;
        this.productoId = null;
        this.conMe      = null;
        this.contenidoN         = 0;
        this.contenidoP2O5      = 0;
        this.contenidoK2O       = 0;
        this.contenidoCaO       = 0;
        this.contenidoMgO       = 0;

        this.snVegetativa       = 0;
        this.snMedia            = 0;
        this.snGenerativa1      = 0;
        this.snGenerativa2      = 0;

 /*|||||||||||||||||||||||||||||||| Bloque Getters and Setters */




    /*
    Function setId
        id para el programa
        param id String id
    */
	this.setId = function(id){
		this.id = id;
	};

    /*
    Function setNombre
        id para el programa
        param id String id
    */
	this.setNombre = function(nombre){
		this.nombre = nombre;
	};
    /*
    Function setProductoId
        id para el programa
        param id String id
    */
	this.setProductoId = function(id){
		this.productoId = id;
	};
    /*
    Function setConMe
        tiene o no manganeso que contiene fertilizante
        param id String id
    */
    this.setConMe = function(flag){
        this.conMe = flag;
    };
    /*
    Function setContP2O5
        Kg Total de oxido fosforo que contiene fertilizante
        param id String id
    */
    this.setContP2O5 = function(kg){
        
        if (kg!="") {

            this.contenidoP2O5 =     Math.round(parseFloat(kg).toFixed() * 100) / 100; 
        }     
    }
    /*
    Function setContK2O
        Kg Total de oxido potasio que contiene fertilizante
        param id String id
    */
    this.setContK2O = function(kg){
        
        if (kg!="") {
            this.contenidoK2O =     Math.round(parseFloat(kg).toFixed() * 100) / 100; 
        }     
    }
    /*
    Function setContCaO
        Kg Total de calcio que contiene fertilizante
        param id String id
    */
    this.setContCaO = function(kg){
        
        if (kg!="") {
            this.contenidoCaO =     Math.round(parseFloat(kg).toFixed() * 100) / 100; 
        }     
    }
    /*
    Function setContMgO
        Kg Total de oxido magnesio que contiene fertilizante
        param id String id
    */
    this.setContMgO = function(kg){
        
        if (kg!="") {
            this.contenidoMgO =     Math.round(parseFloat(kg).toFixed() * 100) / 100;  
        }    
    }
    /*
    Function setContN
        Kg Total de nitrogeno que contiene fertilizante
        param id String id
    */
    this.setContN = function(kg){
        
        if (kg!="") {
            this.contenidoN =     Math.round(parseFloat(kg).toFixed() * 100) / 100; 
        }  
    }

    /*
    Function setSnVegetativa
        kg de solucion vegetativa
        param kg String kg
    */
    this.setSnVegetativa = function(kg){
		
		if (kg!=="") {
        this.snVegetativa =     Math.round(parseFloat(kg).toFixed() * 100) / 100; 
        }  
    };
    /*
    Function setSnMedia
        kg de solucion media 2
        param kg String kg
    */
    this.setSnMedia = function(kg){
		
		if (kg!=="") {
        this.snMedia =     Math.round(parseFloat(kg).toFixed() * 100) / 100; 
        }  
    };
    /*
    Function setSnGenerativa1
        kg de solucion generativa 1
        param kg String kg
    */
    this.setSnGenerativa1 = function(kg){
		
		if (kg!=="") {
        this.snGenerativa1 =     Math.round(parseFloat(kg).toFixed() * 100) / 100; 
        }  
    };
    /*
    Function setSnGenerativa2
        kg de solucion generativa 2
        param kg String kg
    */
    this.setSnGenerativa2 = function(kg){
		
		if (kg!=="") {
        this.snGenerativa2 =     Math.round(parseFloat(kg).toFixed() * 100) / 100; 
        }  
    };


    /*
    Function setSolucionesNutritivas
       crea las distintas soluciones del programa hidroponico 
       param soluciones JSON (object) 
    */
    this.setSolucionesNutritivas = function (soluciones) {

        this.solucionVegetativa  =  {
                    "gl" : this.convertToNum(soluciones.vegetativa.gl, 3 ),
                    "n"  : this.convertToNum(soluciones.vegetativa.n, 2 ),
                    "p"  : this.convertToNum(soluciones.vegetativa.p, 2 ),
                    "k"  : this.convertToNum(soluciones.vegetativa.k, 2 ),
                    "ca" : this.convertToNum(soluciones.vegetativa.ca, 2 ),
                    "mg" : this.convertToNum(soluciones.vegetativa.mg, 2 ),
                    "fe" : this.convertToNum(soluciones.vegetativa.fe, 2 ),
                    "zn" : this.convertToNum(soluciones.vegetativa.zn, 2 ),
                    "mn" : this.convertToNum(soluciones.vegetativa.mn, 2 ),
                    "cu" : this.convertToNum(soluciones.vegetativa.cu, 2 ),
                    "b"  : this.convertToNum(soluciones.vegetativa.b, 2 ),
                    "mo" : this.convertToNum(soluciones.vegetativa.mo, 2 )
        };

        this.solucionMedia =  {
                    "gl" : this.convertToNum(soluciones.media.gl, 3 ),
                    "n"  : this.convertToNum(soluciones.media.n, 2 ),
                    "p"  : this.convertToNum(soluciones.media.p, 2 ),
                    "k"  : this.convertToNum(soluciones.media.k, 2 ),
                    "ca" : this.convertToNum(soluciones.media.ca, 2 ),
                    "mg" : this.convertToNum(soluciones.media.mg, 2 ),
                    "fe" : this.convertToNum(soluciones.media.fe, 2 ),
                    "zn" : this.convertToNum(soluciones.media.zn, 2 ),
                    "mn" : this.convertToNum(soluciones.media.mn, 2 ),
                    "cu" : this.convertToNum(soluciones.media.cu, 2 ),
                    "b"  : this.convertToNum(soluciones.media.b, 2 ),
                    "mo" : this.convertToNum(soluciones.media.mo, 2 )
        };
        this.solucionGenerativa1 =  {
                    "gl" : this.convertToNum(soluciones.generativa1.gl, 3 ),
                    "n"  : this.convertToNum(soluciones.generativa1.n, 2 ),
                    "p"  : this.convertToNum(soluciones.generativa1.p, 2 ),
                    "k"  : this.convertToNum(soluciones.generativa1.k, 2 ),
                    "ca" : this.convertToNum(soluciones.generativa1.ca, 2 ),
                    "mg" : this.convertToNum(soluciones.generativa1.mg, 2 ),
                    "fe" : this.convertToNum(soluciones.generativa1.fe, 2 ),
                    "zn" : this.convertToNum(soluciones.generativa1.zn, 2 ),
                    "mn" : this.convertToNum(soluciones.generativa1.mn, 2 ),
                    "cu" : this.convertToNum(soluciones.generativa1.cu, 2 ),
                    "b"  : this.convertToNum(soluciones.generativa1.b, 2 ),
                    "mo" : this.convertToNum(soluciones.generativa1.mo, 2 )
        };
        this.solucionGenerativa2 =  {
                    "gl" : this.convertToNum(soluciones.generativa2.gl, 3 ),
                    "n"  : this.convertToNum(soluciones.generativa2.n, 2 ),
                    "p"  : this.convertToNum(soluciones.generativa2.p, 2 ),
                    "k"  : this.convertToNum(soluciones.generativa2.k, 2 ),
                    "ca" : this.convertToNum(soluciones.generativa2.ca, 2 ),
                    "mg" : this.convertToNum(soluciones.generativa2.mg, 2 ),
                    "fe" : this.convertToNum(soluciones.generativa2.fe, 2 ),
                    "zn" : this.convertToNum(soluciones.generativa2.zn, 2 ),
                    "mn" : this.convertToNum(soluciones.generativa2.mn, 2 ),
                    "cu" : this.convertToNum(soluciones.generativa2.cu, 2 ),
                    "b"  : this.convertToNum(soluciones.generativa2.b, 2 ),
                    "mo" : this.convertToNum(soluciones.generativa2.mo, 2 )
        };

    };

 /*|||||||||||||||||||||||||||||||| Bloque Funciones */
 
    this.convertToNum = function(stringNum, fixed){
        if (stringNum!=="") {
            var newNum = parseFloat(stringNum).toFixed(fixed);
            //console.log(newNum);
            return parseFloat(newNum);
            
        }else{
            return 0;
        }

    };

}
