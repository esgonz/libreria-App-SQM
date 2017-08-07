/*
        Class Cultivo
            Informacion del cultivo
*/
function CultivoNuevo() {

 /*|||||||||||||||||||||||||||||||| Atributos */

    /*Datos en Duro - usted no lo haga */
    this.tipoCondiciones    = 
        [
            {
                "id":"1",
                "condicion":"alto"
            },
            {
                "id":"2",
                "condicion":"bajo"
            },
            {
                "id":"3",
                "condicion":"Normal"
            }
        ];
    this.elementos          = 
        [   {
                "id":"0",
                "elemento":"",
                "Nombre":"",
                "nomesclatura":""
            },
            {
                "id":"1",
                "elemento":"ca",
                "Nombre":"Calcio",
                "nomesclatura":"Ca"
            }
        ];
    this.medios             = 
        [
            {
                "id":"2",
                "medio":"agua",
                "Nombre":"Agua",
            },
            {
                "id":"1",
                "medio":"suelo",
                "Nombre":"Suelo",
            }
        ];
    this.aplicaciones       = 
        [
            {
                "id":"1",
                "aplicaciones":"goteo",
                "Nombre":"Goteo",
            },
            {
                "id":"2",
                "aplicaciones":"suelo",
                "Nombre":"Suelo",
            },
            {
                "id":"3",
                "aplicaciones":"hidroponia",
                "Nombre":"Hidroponia",
            },
            {
                "id":"4",
                "aplicaciones":"riego",
                "Nombre":"Riego",
            }
        ];
    this.tecnicas           = 
        [
            {
                "id":"1",
                "tecnicas":"campo-abierto",
                "Nombre":"Campo Abierto",
            },
            {
                "id":"2",
                "tecnicas":"invernadero",
                "Nombre":"Invernadero",
            },
            {
                "id":"3",
                "tecnicas":"macrotunel",
                "Nombre":"Macrotunel",
            },
            {
                "id":"4",
                "tecnicas":"cubierta",
                "Nombre":"Cubierta",
            }
        ];
    this.condiciones        = 
        [
            {
                "id":"1",
                "condicion": "Alto contenido Calcio",
                "tipoId": "1",
                "elementoId":"1",
                "medioId":""
            },
            {
                "id":"2",
                "condicion": "Bajo contenido Calcio",
                "tipoId": "2",
                "elementoId":"1",
                "medioId":""
            },
            {
                "id":"3",
                "condicion": "Alto contenido Calcio en Agua",
                "tipoId": "1",
                "elementoId":"2",
                "medioId":"1"
            },
            {
                "id":"4",
                "condicion": "Bajo contenido Calcio en Agua",
                "tipoId": "2",
                "elementoId":"2",
                "medioId":"1"
            },
            {
                "id":"5",
                "condicion": "Normal",
                "tipoId": "3",
                "elementoId":"0",
                "medioId":"1"
            }
        ];
    this.tecnificaciones    = 
        [
            {
                "id":"1",
                "tecnificacion": "Campo Abierto",
                "tecnicaId": "1",
                "aplicacionId":"1",
            },
            
            {
                "id":"5",
                "tecnificacion": "Cubierta en Suelo",
                "tecnicaId": "4",
                "aplicacionId":"2",
            },
            
            {
                "id":"2",
                "tecnificacion": "Invernadero Suelo",
                "tecnicaId": "2",
                "aplicacionId":"2",
            },
            
            {
                "id":"3",
                "tecnificacion": "Invernadero Hidroponia",
                "tecnicaId": "2",
                "aplicacionId":"3",
            },
            
            {
                "id":"4",
                "tecnificacion": "Macrotunel",
                "tecnicaId": "3",
                "aplicacionId":"4",
            },
            
            {
                "id":"5",
                "tecnificacion": "Cubierta en Hidroponia",
                "tecnicaId": "4",
                "aplicacionId":"3",
            }
        ];    
    
    this.id                 =   null;
    this.nombre             =   null;
    this.background         =   null;
    this.descripcion        =   null;
    this.etapas             =   null;
    this.desordenes         =   null;
    this.variedadesTecnicas =   null;
    this.variedades         =   null;
    this.productos          =   null;

 /*|||||||||||||||||||||||||||||||| Bloque Getters and Setters */
 
    /*
    Function setId
        id para CultivoNuevo
        Param string id
        return void
     */
    this.setId = function (id){
        this.id = id;
    };

    /*
    Function setNombre
        nombre para el CultivoNuevo
        Param string nombre
        return void
     */
    this.setNombre = function (nombre){
        this.nombre = nombre;
    };

    /*
    Function setBackground
        imagen de fondo para elCultivoNuevo
        Param string (url) background
        return void
     */
    this.setBackground = function (background){
        this.background = background;
    };

    /*
    Function setDescripcion
        descripcion del CultivoNuevo
        Param string descripcion
        return void
     */
    this.setDescripcion = function (descripcion){
        this.descripcion = descripcion;
    };

    /*
    Function setEtapas
        etapas del CultivoNuevo
        Param JSON (object) etapas
        return void
     */
    this.setEtapas = function (etapas){
        this.etapas = etapas;
    };

    /*
    Function setDesordenes
        desordenes del CultivoNuevo
        Param JSON (object) desordenes
        return void
     */
    this.setDesordenes = function (desordenes){
        this.desordenes = desordenes;
    };

    /*
    Function setProductos
        productos del CultivoNuevo
        Param JSON (object) productos
        return void
     */
    this.setProductos = function (productos){
        this.productos = productos;
    };

    /*
    Function setVariedadesTecnicas
        crear nuevo objeto "VariedadTecnica" para cada variedad Tecnica existente en el cultivo
        Param variedadesTecnicas, Array JSON (object)
        Return void

     */
    this.setVariedadesTecnicas = function (variedadesTecnicas){
        
        var arrVariedadesTecnicas=[];
        //console.log("variedadesTecnicas");
        for (var i = 0; i < variedadesTecnicas.length; i++) {
            var variedadTecAux  = new VariedadTecnica(variedadesTecnicas[i]);
            //console.log("--vartecnica: " +i);
                //console.log(variedadTecAux);
            arrVariedadesTecnicas.push(variedadTecAux);
        }
        this.variedadesTecnicas = arrVariedadesTecnicas;
    };

    /*
    Function setVariedades
        crear nuevo objeto "Variedad" para cada variedad existente en el "Cultivo"
        Param variedades, Array JSON (object)
        return void
     */
    this.setVariedades = function (variedades){
        //console.log("variedades");
        var arrVariedades=[];
        for (var i = 0; i < variedades.length; i++) {
            var variedadAux = new CultivoVariedad(variedades[i], this.id);
            //console.log("--variedad: " +i);
                //console.log(variedadAux);
            arrVariedades.push(variedadAux);
        }
        this.variedades =  arrVariedades;
    };

    /*
    Function getInfo
        informacion basica del Cultivo
        Return String 
    */
    this.getInfo = function () {
        return 'CULTIVO:  ID '+this.id + ' | NOMBRE:' + this.nombre + ' ';
    };
    
    /*
    Function getDescripcionCorta
        Descripcion corta of Cultivo
        Return String
    */
    this.getDescripcionCorta = function (){
        console.log("Cultivo.getDescripcionCorta");
        var descMin= this.descripcion.substr(0, 500);
        descMin=descMin+"...<br></p></div>";
        //console.log(descMin);
        return descMin;
    };

    /*
    Function getNombre
        
        Return Array
    */
    this.getNombre = function (){
        console.log("Cultivo.getNombre");
        return this.nombre;
    };

    /*
    Function getVariedades
        
        Return Array
    */
    this.getVariedades = function (){

        return this.variedades;
    };

    /*
    Function getVariedadesTecnicas
        
        Return Array
    */
    this.getVariedadesTecnicas = function (){
        return this.variedadesTecnicas;
    };
 /*|||||||||||||||||||||||||||||||| Bloque Funciones */

   
}
