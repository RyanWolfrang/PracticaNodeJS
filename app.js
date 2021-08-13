const prompt = require("prompt-sync")();

var validator = require("validator");

const usuarios = require("./usuarios")

console.log("Bienvenido al sistema")

while(true){

    
    console.log("Elegí entre estas opciones")
    console.log("1- Iniciar sesion")
    console.log("2- Registrarse")
    console.log("3- Acabar con este sufrimiento.")

    let opt = parseInt(prompt("Número de opción elegida:"))

    if(opt === 1){
        //Iniciar sesión
        console.log("Inicio de sesión")
        const email = prompt("Mail:");
        const pass = prompt("Contraseña:");

        if (usuarios.verificar(email,pass)) {

            console.log("El usuario existe.");

        } else {

            console.log("El usuario no existe")}
        
        
    } else if(opt === 2){
        
        console.log("Registrar usuario")
        const email = prompt("Email: ");
        
        //usuarios.verificaremail(email);

        
        
        if(!validator.isEmail(email)){
            console.log("Master veni con un mail de verdad.")
            continue;
        };
        
        

        const pass = prompt("Contraseña: ");
        usuarios.registrar(email, pass);
        console.log("¡Ahora estás registrado!")

    } else if(opt === 3){
        //Cerrar el programa
        console.log("adios popo")
        process.kill(process.pid, "SIGTERM");
        
    }
    
    else {
        console.log("Opción inexistente.")
    }

}