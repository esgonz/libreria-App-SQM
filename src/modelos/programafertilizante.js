/*
    Class ProgramaFertilizante
    Technical variable of cultivos 
*/

function ProgramaFertilizante(){

 /*|||||||||||||||||||||||||||||||| Atributos */

		this.id 				= null;
		this.nombre 			= null;
		this.productoId 		= null;
		this.kgSemana 			= 0;
		this.kgEtapa 			= 0;
		this.kgN 				= 0;
		this.kgP2O5 			= 0;
		this.kgK2O 				= 0;
		this.kgCaO 				= 0;
		this.kgMgO 				= 0;
		this.conMe 				= null;
		this.contenidoN 		= 0;
		this.contenidoP2O5 		= 0;
		this.contenidoK2O 		= 0;
		this.contenidoCaO 		= 0;
		this.contenidoMgO 		= 0;
		this.KgPorSemanas 		= null;

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
 	Function setId
	 	nombre para el programa
	 	param nombre String nombre
 	*/
	this.setNombre = function(nombre){
		this.nombre = nombre;
	};
	/*
 	Function setId
	 	ProductoID del fertilizante
	 	param id String id
 	*/
	this.setProductoId = function(id){
		this.productoId = id;
	};
	/*
 	Function setKgSemana
	 	kg por semana del producto fertilizante
	 	param kg String kg
 	*/
	this.setKgSemana = function(kg){
		if (kg!="") {
			this.kgSemana = Math.round(parseFloat(kg).toFixed() * 100) / 100;
		}
	};
	/*
 	Function setKgEtapa 
	 	kg totales por etapa del producto fertilizante
	 	param id String id
 	*/
	this.setKgEtapa = function(kg){
		if (kg!="") {
			this.kgEtapa = Math.round(parseFloat(kg).toFixed() * 100) / 100;
		}
	};
	/*
 	Function setId
	 	Kg aporte  de nitrogeno que contiene fertilizante
	 	param id String id
 	*/
	this.setKgN = function(kg){
		if (kg!="") {
			this.kgN = Math.round(parseFloat(kg).toFixed() * 100) / 100;
		}
	};
	/*
 	Function setKgP2O5
	 	Kg aporte  de oxido fosforo que contiene fertilizante
	 	param id String id
 	*/
	this.setKgP2O5 = function(kg){
		if (kg!="") {
			this.kgP2O5 = Math.round(parseFloat(kg).toFixed() * 100) / 100;
		}
	};
	/*
 	Function setKgK2O
	 	Kg aporte   de nitratio potasio que contiene fertilizante
	 	param id String id
 	*/
	this.setKgK2O = function(kg){
		if (kg!="") {
			this.kgK2O = Math.round(parseFloat(kg).toFixed() * 100) / 100;
		}
	};
	/*
 	Function setkgCaO
	 	Kg aporte  de oxido calcio que contiene fertilizante
	 	param id String id
 	*/
	this.setkgCaO = function(kg){
		
		if (kg!="") {
			this.kgCaO = Math.round(parseFloat(kg).toFixed() * 100) / 100;
		}
		
	};
	/*
 	Function setkgMgO
	 	Kg aporte de magnesio que contiene fertilizante
	 	param id String id
 	*/
	this.setkgMgO = function(kg){
		if (kg!="") {
			this.kgMgO = Math.round(parseFloat(kg).toFixed() * 100) / 100;
		}
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
 	Function setKgPorSemanas
	 	Kg Total de nitrogeno que contiene fertilizante
	 	param id String id
 	*/
    this.setKgPorSemanas = function(semanas){
        this.KgPorSemanas = semanas;
    }


 /*|||||||||||||||||||||||||||||||| Bloque Funciones */

}