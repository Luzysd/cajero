
const datosLogin = {
    nombre:"",
    contraseña:"",
}

function login(){
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("contraseña").value;

    if (user == "Luz" && pass == "1234"||user == "Pepe" && pass == "2345"|| user == "Ana" && pass=="1234"){
        window.location="cuenta1.html";
            }else{
                alert("Usuario o contraseña incorrectos");
            }
        } 

// function login(){

//     const ingresar = cuentas.filter(user).filter( pass );

//     if(ingresar.length ){
//         window.location="cuenta1.html";
//     }else{
//         alert('Usuario o contraseña incorrectos');
//     }

//        }


// function user (cuenta){
//     const {nombre} = usuario;
//     if(nombre){
//         window.location="cuenta1.html";
//     }
// }

// function pass (cuenta){
//     const {contraseña} = contraseña;
//     if(contraseña){
//         window.location="cuenta1.html";
//     }
// }

function depositos(){
    var cantidadTotal=parseInt(document.getElementById("c1").value);
    var deposito=parseInt(document.getElementById("cant").value);
    
    document.getElementById("c1").value=(cantidadTotal+ deposito)

    if (cantidadTotal => 990) {
        cantidadTotal =990;
        alert("Se excedio el limite" );
        
    }
}

function retiros(){
    var cantidadTotal=parseInt(document.getElementById("c1").value);
    var retiro=parseInt(document.getElementById("cant").value);
    
    document.getElementById("c1").value=(cantidadTotal-retiro)

    if (cantidadTotal <= 10) {
        cantidadTotal=10
        alert("No puedes tener menos de 10 en la cuenta" )
        
    }
}




  







