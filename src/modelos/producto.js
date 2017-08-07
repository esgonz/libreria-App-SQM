/*
        Class Producto
            Basic info of the product
*/


function Producto(data) {
    console.log("producto.parseData");
     /*||||||||||||||||||||||||||||||||Atributos */
    this.id                                 =   data.id;
    this.nombre                             =   data.nombre;
    this.verbose                            =   "";
    this.presentacion                       =   data.presentacion;
    this.descripcionCorta                   =   data.descripcionCorta;
    this.img                                =   data.img;
    this.marcaID                            =   data.marcaID;
    this.marca                              =   data.marca;
    this.lineaID                            =   data.lineaID;
    this.linea                              =   data.linea;
    this.cultivos                           =   data.cultivos;
    this.metaTags                           =   data.metaTags;
    this.descripcion                        =   data.descripcion;
    this.informacionTecnica                 =   data.informacionTecnica;
    this.hojaProducto                       =   data.hojaProducto;
    this.informacionBasicaNutrientes        =   data.informacionBasicaNutrientes;
    



    /*||||||||||||||||||||||||||||||||Bloque Getters and Setters */

    /*
    Function getInfo
        Basic info of the product

    Return String
    */
    this.getInfo = function () {
        return this.id + ' ' + this.nombre + ' ';
    };


    /*
        Function getTable
            Return a Html table with the parameters
        @data Object with data rows and cols
        Return @strTabla String
    */
    this.getTable= function (data){
        var strTabla='<table class="table table-striped table-hover ">';

                strTabla=strTabla+'<tbody id="" class="">';
                    for (var i = 0; i < data.length; i++) {
                        var row= data[i];
                        //console.log("row");
                        //console.log(row);
                        strTabla=strTabla+'<tr id="" class="">';
                        for (var j = 0; j < row.cols.length; j++) {
                            var col=row.cols[j];
                            //console.log("col");
                            //console.log(col);
                            strTabla=strTabla+'<td id="" class="">';
                            strTabla=strTabla+  col.content;
                            strTabla=strTabla+'</td>';
                        }

                        strTabla=strTabla+'</tr>';
                    }
                strTabla=strTabla+'</tbody>';
        strTabla=strTabla+'</table>';

        return strTabla;
    };


    /*
        Function getMinDescripcion
            Return a Html with the extract text of the info.
        @textoBtn texto for the button 
        Return @strTabla String
    */
    this.getMinDescripcion = function(textoBtn) {
        var cortePosition=this.descripcion.search("<corte>");

        if (cortePosition<0) {
            return this.descripcion;
        }else{
            var btn='<a class="btn btn-default btn-block" id="revelar-descripcionCompleta" data-estado="false" data-toggle="collapse" aria-expanded="false" aria-controls="#descripcionCompleta" data-target="#descripcionCompleta"><textoBtn> </a> <div class="collapse" id="descripcionCompleta">';
            var strReturn= this.descripcion.replace("<corte>", btn); 
            strReturn= strReturn.replace("<textoBtn>", textoBtn); 
            
            strReturn = strReturn+ '</div>';
            return strReturn;
        }
    };


    /*||||||||||||||||||||||||||||||||Bloque Funciones */



}



