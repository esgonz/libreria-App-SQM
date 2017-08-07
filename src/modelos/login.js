/*
        Class Producto
            Basic info of the product
*/


function Login() {
    console.log("producto.parseData");         
    
 /*|||||||||||||||||||||||||||||||| Atributos */

 /*|||||||||||||||||||||||||||||||| Bloque Getters and Setters */

 /*|||||||||||||||||||||||||||||||| Bloque Funciones */

    /*Funcion loginControl
        recibe el usuario y la clave para ejecutar la funcion JAVA para validar la informacion
        param String usuario, String clave
    */
    this.loginControl= function (usuario,clave){
            console.log("validateLogin JAVA");
            cordova.exec(this.validateSuccess, this.validateFailure, "LoginSQM", "validateLogin", [usuario, clave]);         
    };

        /*
            Funcion validateSuccess (callback)
            callback en caso de que se pueda ejecutar
            param data String codigo de respuesta
         */
        this.validateSuccess = function (data){
            alert("validateSuccess");
            console.log("user Validate Success");
            var flag="";

            if (data=="200") {
                flag= "true";
            };
            if (data=="401") {
                flag= "Clave Incorrecta";

            };
            if (data=="403") {
                flag= "Usuario Incorrecto";

            };
            //console.log(data);

            //alert("flag: "+ flag);
            if (flag=="true") {
                //crear localStorage
                this.setLoginUser(this.inputUsuario);
                setTimeout(function(){
                    //console.log("WAIT app");
                    window.location = "index.html#/menu";
                }, 400);

            }else{
                try{
                    navigator.notification.alert(
                        flag,  // message
                        alertDismissed,         // callback
                        'Permisos de Usuarios',            // title
                        'Aceptar'                  // buttonName
                    );
                }catch(error){
                    alert(flag);
                }
            }
        };
        
        /*
            Funcion validateFailure (callback)
            callback en caso de que no se pueda ejecutar
            param data informacion del error
         */
        this.validateFailure = function (data){
            console.log("validateFailure");
        };

}



