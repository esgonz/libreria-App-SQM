/*
    Class ProgramaFertilizanteHidroponia
    Technical variable of cultivos 
*/

function FactorSolucionNutricional(){

 /*|||||||||||||||||||||||||||||||| Atributos */
    this.productoId     = null ;
    this.nombre         = null ;
    this.linea          = null ;
    this.factorN        = null ;
    this.factorNno3     = null ;
    this.factorNnh4     = null ;
    this.factorNco      = null ;
    this.factorP2o5     = null ;
    this.factorK2o      = null ;
    this.factorS        = null ;
    this.factorCao      = null ;
    this.factorMgo      = null ;
    this.factorFe       = null ;
    this.factorZn       = null ;
    this.factorMn       = null ;
    this.factorCu       = null ;
    this.factorB        = null ;
    this.factorMo       = null ;
    this.factorNio      = null ;
 /*|||||||||||||||||||||||||||||||| Bloque Getters and Setters */



	this.setProductoId     = function (id){
        this.productoId = id;
    };
    this.setNombre          = function (nombre){
        this.nombre = nombre;
    };
    this.setLinea           = function (linea){
        this.linea = linea;
    };
    this.setFactorN         = function (n){
        if (n!="-") {
            this.factorN = parseFloat(n);    
        }
    };
    this.setFactorNno3      = function (nno3){
        if (n!="-") {
            this.factorNno3 = parseFloat(nno3);    
        }
    };
    this.setFactorNnh4      = function (nnh4){
        if (n!="-") {
            this.factorNnh4 = parseFloat(nnh4);    
        }
    };
    this.setFactorNco   = function (nco){
        if (n!="-") {
            this.factorNco = parseFloat(nco);    
        }
    };
    this.setFactorP2o5      = function (p2o5){
        if (n!="-") {
            this.factorP2o5 = parseFloat(p2o5);    
        }
    };
    this.setFactorK2o   = function (k2k){
        if (n!="-") {
            this.factorK2o = parseFloat(k2k);    
        }
    };
    this.setFactorS     = function (s){
        if (n!="-") {
            this.factorS = parseFloat(s);    
        }
    };
    this.setFactorCao   = function (cao){
        if (n!="-") {
            this.factorCao = parseFloat(cao);    
        }
    };
    this.setFactorMgo   = function (mgo){
        if (n!="-") {
            this.factorMgo = parseFloat(mgo);    
        }
    };
    this.setFactorFe    = function (fe){
        if (n!="-") {
            this.factorFe = parseFloat(fe);    
        }
    };
    this.setFactorZn    = function (zn){
        if (n!="-") {
            this.factorZn = parseFloat(zn);    
        }
    };
    this.setFactorMn    = function (mn){
        if (n!="-") {
            this.factorMn = parseFloat(mn);    
        }
    };
    this.setFactorCu    = function (cu){
        if (n!="-") {
            this.factorCu = parseFloat(cu);    
        }
    };
    this.setFactorB     = function (b){
        if (n!="-") {
            this.factorB = parseFloat(b);    
        }
    };
    this.setFactorMgo= function (mo){
        if (n!="-") {
            this.factorMo = parseFloat(mo);    
        }
    };
    this.setFactorNio   = function (nio){
        if (n!="-") {
            this.factorNio = parseFloat(nio);    
        }
    };

 /*|||||||||||||||||||||||||||||||| Bloque Funciones */
    this.getSolucionNutritivaByKg =  function(kg){
        

        var objSolucion = {
            "n" :   0,
            "p" :   0,
            "k" :   0,
            "ca" :  0,
            "mg" :  0,
            "fe" :  0,
            "zn" :  0,
            "mn" :  0,
            "cu" :  0,
            "b" :   0,
            "mo" :  0,
        };

        if (isNaN(kg) ) {
            console.log("SolucionNutritiva.getSolucionNutritivaByKg : no es un numero");
        }else{
            var varGl = parseFloat(kg)/100;

            objSolucion["n"]    = varGl * this.factorN ;
            objSolucion["p"]    = varGl * this.factorP ;
            objSolucion["k"]    = varGl * this.factorK ;
            objSolucion["ca"]   = varGl * this.factorCa ;
            objSolucion["mg"]   = varGl * this.factorMg ;
            objSolucion["fe"]   = varGl * this.factorFe ;
            objSolucion["zn"]   = varGl * this.factorZn ;
            objSolucion["mn"]   = varGl * this.factorMn ;
            objSolucion["cu"]   = varGl * this.factorCu ;
            objSolucion["b"]    = varGl * this.factorB ;
            objSolucion["mo"]   = varGl * this.factorMo ;
        }

    };
}
