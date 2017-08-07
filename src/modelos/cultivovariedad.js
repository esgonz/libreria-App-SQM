/*
    Class CultivoVariedad
    Technical variability of cultivos 
*/


function CultivoVariedad (dataVariedad, parentId) {		
        console.log("CultivoVariedad.parseData");
        
 /*|||||||||||||||||||||||||||||||| Atributos */

    //variedad data
    this.setId(dataVariedad.variedadId); 
    this.setNombre(dataVariedad.variedadNombre);        
    this.setVariedadesTecnicas(dataVariedad.variedadesTecnicas);
    this.setVerbose     =   dataVariedad.verbose;
    this.parentId       =   parentId;
    
 /*|||||||||||||||||||||||||||||||| Bloque Getters and Setters */
 /*|||||||||||||||||||||||||||||||| Bloque Funciones */

    


}
CultivoVariedad.prototype = new CultivoNuevo();



