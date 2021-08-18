const axios = require('axios').default;;

function verificarUsuario(email ,pass){
    var a = axios.get("http://localhost:3000/usuarios").then(
        function (resp){
            console.log(resp.data);
        }
    )
}



function registrarUsuario(email ,pass){
    return true;
}


exports.verificar = verificarUsuario;
exports.registrar = registrarUsuario;
//exports.verificaremail = verificarEmail;