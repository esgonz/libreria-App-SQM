/*loginController*/  
LibreriaAppSQM.controller("loginController", function($scope, $rootScope, localStorageService) {
    $rootScope.currentPage="login";
    $scope.inputUsuario = "";
    
    if ($rootScope.mercado.id =="mx" || $rootScope.mercado.id =="pe") {
        window.location = "index.html#/menu";
    }

    $scope.verifSesion = function (){
        console.log("verificar Sesion");
        var flag=false;
        //verificar comtabilidad
        if($scope.verifCompatibilidad()){
            
            console.log("compatibilidad OK");
            //verificar si esta almacenado
            if ($scope.getLocalStorage("version")) {
                
                console.log("version existe");
                var versionStorage  =   $scope.getLocalStorage("version");
                //verificar si esta almacenado ultima version
                
                if (versionStorage == $rootScope.mercado.version){
                    console.log("version corresponde");
                    flag=true;
                    window.location = "index.html#/menu";
                }
            }
        }

        if (!flag) {
            
            console.log("no existe informacion Local");
        }
        return flag;        
    };


    
    var validateSuccess = function (data){
        //alert("validateSuccess");
        console.log("user Validate Success");
        var flag="";

        if (data=="200") {
            flag= "true";
            console.log("true");
        };
        if (data=="402") {
            flag= "Clave Incorrecta 4021";
            console.log("Clave Incorrecta");

        };
        if (data=="403") {
            flag= "Usuario Incorrecto 403";
            console.log("Usuario Incorrecto");

        };
        //console.log(data);

        //alert("flag: "+ flag);
        if (flag=="true") {
            //crear localStorage
            $scope.setLoginUser($scope.inputUsuario);
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

    var validateFailure = function (data){
        //alert("validateFailure");
        console.log("validateFailure");
    };

    $scope.loginControl= function (usuario, clave){
        //alert("loginControl: "+ usuario, +" + "+ clave);
        console.log("function loginControl");
        if (!debugMode) {
            console.log("loginControl JAVA");
            cordova.exec(validateSuccess, validateFailure, "LoginSQM", "validateLogin", [usuario.toLowerCase() , clave.toLowerCase() ]);            
        }else{
            console.log("loginControl JS");
            console.log("no existe informacion Local");
            //crear localStorage
            $scope.setLoginUser(usuario.toLowerCase());
            setTimeout(function(){
                //console.log("WAIT app");
                window.location = "index.html#/menu";
            }, 400);
        }
    };

    $scope.setLoginUser = function (user){
        //alert("setLoginUser");
        console.log("function setLoginUser");
        if ($scope.verifCompatibilidad()) {
            console.log("function setLoginUser compatibilidad Ok");
            $scope.setLocalStorage("user",  user);
            $scope.setLocalStorage("mercado",   $rootScope.mercado.id);
            $scope.setLocalStorage("version",   $rootScope.mercado.version);
            return true;
        }
        return false;
    };

    $scope.verifCompatibilidad = function (){
        console.log("function verifCompatibilidad");
        if(localStorageService.isSupported) {
            return true;
        }
        return false;
    };

    $scope.setLocalStorage = function (key, value){
        console.log("function setLocalStorage");
        return localStorageService.set(key, value);
    };
    
    $scope.getLocalStorage = function (key){
        console.log("function getLocalStorage");
        return localStorageService.get(key);
    };



    //verificar sesion 
    $scope.verifSesion();

});





/*
function ControladorLogin(){
}

ControladorLogin.prototype.validate= function validate(usuario,clave)
{
    //console.log("function validateLogin");
    cordova.exec(validateSuccess, validateFailure, "LoginSQM", "validateLogin", [usuario, clave]);


}

function validateSuccess(data) {
    //alert("validateSuccess");
    //console.log("user Validate Success");
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
}

function validateFailure(data) {
//alert("validateFailure");
//console.log("user Validate Error");
//console.log(data);
}
var ctrlLogin    = new ControladorLogin();*/


