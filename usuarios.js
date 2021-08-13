//var validator = require("validator");

function verificarUsuario(email ,pass){
    return false;
}

function registrarUsuario(email ,pass){
    return true;
}
/*
function verificarEmail(email){
    if(!validator.isEmail(email)){
        console.log("Master veni con un mail de verdad.")
    };
}*/

exports.verificar = verificarUsuario;
exports.registrar = registrarUsuario;
//exports.verificaremail = verificarEmail;