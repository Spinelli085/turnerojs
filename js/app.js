//turnos con tiempo de espera

/*let tiempoEspera=10;
for (let i =1; i<=10;i++){
    const ingresarNombre = prompt ("Ingresar nombre");
    alert ("Turno Nº " + i + " Nombre: " + ingresarNombre);
    alert("Tiempo de espera: " + tiempoEspera + "minutos");
   
    tiempoEspera +=10;

    
    }*/

//turnos con tiempo de espera y array


// function cargaDeDatos() {


//     do {
//         let entrada = prompt("Ingresar nombre");
//         listaNombres.push(entrada.toUpperCase());
//         console.log(listaNombres.length);
        
//     } while (listaNombres.length < cantidad);

    
//     for (let i = 1; i <= 10; i++) {
//         alert("Turno Nº " + i + " Nombre: " + listaNombres[i - 1]);
//         alert("Tiempo de espera: " + tiempoEspera + "minutos");

//         tiempoEspera += 10;
    
//         }


// }
// cargaDeDatos();


// Turnos con tiempo de espera optimizado

// function cargaDeDatos(){
//     while (cantidad>listaNombres.length){
//         let entrada = prompt("Ingresar nombre");
//         listaNombres.push(entrada.toUpperCase());
//         console.log(listaNombres.length);
//     }
//     for (let i = 1; i <= 10; i++) {
//         alert("Turno Nº " + i + " Nombre: " + listaNombres[i - 1]);
//         alert("Tiempo de espera: " + tiempoEspera + "minutos");
        
//         tiempoEspera += 10;
            
//     }
// }
    


// cargaDeDatos();

// turnos con tiempo de espera, agregando nueva funcion para que vaya mostrando los turnos de a 1

// function cargaDeDatos(){
//     while (cantidad>listaNombres.length){
//         let entrada = prompt("Ingresar nombre");
//         listaNombres.push(entrada.toUpperCase());
//         console.log(listaNombres.length);
//         break;
//     }
    
// }
// function calculoTurno(){
//     for (let i = 1; i <= 10; i++) {
//         alert("Turno Nº " + i + " Nombre: " + listaNombres[i - 1]);
//         alert("Tiempo de espera: " + tiempoEspera + "minutos");
        
//         tiempoEspera += 10;
//         cargaDeDatos();
//     }

        
// }
    
// cargaDeDatos();
// calculoTurno();

// turnos con tiempo de espera, agregando especialidades medicas a cada turno asignado.
//Alumno:Rodrigo Spinelli





// turnos.onclick = () =>
// { 
//     console.log = "Hola" ;
//         function cargaDeDatos()
//     {
//             while (cantidad>listaNombres.length){
//                 if(tiempoEspera>100){
//                     alert("No hay mas turnos");
//                     break;
//                 }
//                 console.log(listaNombres.length);
//                 alert("Turno Nº " + i + " Nombre: " + listaNombres[i - 1]);
//                 alert("Turno para: " + listaEspecialidades[i -1]);
//                 alert("Tiempo de espera: " + tiempoEspera + "minutos");
//                 tiempoEspera += 10;
//                 i++;
            
            
//     }
// // }

//AREGANDO ALGUNAS MEJORAS Y UTILIZANDO ELEMENTOS DE LIBRERIAS, APLICADO OPERADORES TERNARIOS


let parametros={ tiempoEspera:10, cantidad:11, i:1};
const {tiempoEspera, cantidad, i } = parametros
const parametrosJSON = JSON.stringify(parametros);
console.log(parametrosJSON);
localStorage.setItem("parametros", parametrosJSON);
document.querySelector("#buttonBack").style.display="none";
document.querySelector("#error").style.display="none";


    let botonVolver = document.getElementById("buttonBack").onclick = () => {
    document.querySelector("#formulario").style.display="block";
    form.reset();
    document.getElementById("#turno");
    turno.remove();
    document.getElementsByClassName("container");
    container.remove();
       
}

    const sacarTurno = document.getElementById("button").onclick = () =>
    {   


        parametros.tiempoEspera>100 ?  document.getElementById("button").onclick = () => Swal({
            title: "No hay mas turnos",
            text: "Intente mas tarde",
            icon: "error",
            button: "Aceptar",
            }) : Swal.fire({
            title:"Procesando datos",
            text: "Porfavor espere", 
            icon:"success" ,
            confirmButtonColor: "#3085d6" ,
            cancelButtonColor: "#d33" ,
            confirmButtonText: "Aceptar"
            })
        

        if(nombre.value==false,apellido.value==false,edad.value==false){
            document.querySelector("#error").style.display="block";
        }else{
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div id="turno" class="card-body list-group list-group-flush">
        <h1>Bienvenido/a ${nombre.value}</h1>
        <h3 class="card-title"> Turno Nº ${parametros.i}</h3>
        <h3 class="list-group-item"> Nombre: ${nombre.value}</h3>
        <h3 class="list-group-item"> Apellido: ${apellido.value}</h3>
        <h3 class="list-group-item"> Edad: ${edad.value}</h3>
        <h3 class="list-group-item"> Turno para:  ${liEspecialidades.value}</h3>
        <h3 class"list-group-item"> Tiempo de espera: ${parametros.tiempoEspera} minutos</h3></div>`;
        contenedor.className="container card"
        document.body.appendChild(contenedor);
        parametros.tiempoEspera += 10;
        parametros.i++;   
        document.querySelector("#error").style.display="none";
        document.querySelector("#formulario").style.display="none";
        document.querySelector("#buttonBack").style.display="block";
        
        }
        
    }
    
    fetch("https://flagcdn.com/es/codes.json")
        .then((res)=> res.json())
        .then((data) =>{
        console.log(data);
        });
        
        
    
  

  

    
// let nombre = document.getElementById("nombre")
//     nombre.addEventListener("input", () =>{console.log(nombre.value);})


// document.getElementById("liEspecialidades").onchange = () =>{
//     for ( const Especialidad of liEspecialidades) {
//         console.log(...Especialidad.value);
//     }
// }
 

// alert("Turno Nº " + i + " Nombre: " + nombre.value);
// alert("Turno para: " + liEspecialidades.value);
// alert("Tiempo de espera: " + tiempoEspera + "minutos");
// tiempoEspera += 10;
// i++; 

// function Paciente(nombre,apellido,edad,ocupacion){
//     this.nombre=nombre;
//     this.apellido=apellido;
//     this.edad=edad;
//     this.ocupacion=ocupacion;
//     this.AsignarTurno= function(){console.log("turno asignado a " +this.nombre+" " + this.apellido)}
// }

// const Paciente1=new Paciente("Rodrigo","Spinelli","26","Operario");
// const Paciente2=new Paciente("Melina","Monzon","27","Estudiante");
// const Paciente3=new Paciente("Laura","Perez","42","Empleada de comercio");

// Paciente1.AsignarTurno();
// Paciente2.AsignarTurno();
// Paciente3.AsignarTurno();

// for (const dato in Paciente1){
//     console.log(Paciente1[dato]);
// }

// const especialidades=["Urologia","Traumatologia","Endocrinologia","Oftalmologia","Odontologia"];
// especialidades.push("Ginecologia","Radiologia");
// console.log(especialidades,especialidades.length);
