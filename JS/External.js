alert("Bienvendio a nuestro simulador de Prestamos");


class Usuario {
    constructor (fName, lName, age, documento, estadoCivil, income, gastos, rDependencia, actividad, montoASolicitar, id){
        this.fName = fName;
        this.lName = lName;
        this.age = parseInt(age);
        this.documento = parseInt(documento);
        this.estadoCivil = estadoCivil;
        this.income = parseInt(income);
        this.gastos = parseInt(gastos);
        this.rDependencia = rDependencia;
        this.actividad = actividad;
        this.montoASolicitar = parseInt(montoASolicitar);
        this.id = id;
    }
}


let usuarios = [];
//let option = 0;


let fName;
let lName;
let age;
let documento;
let estadoCivil;
let income;
let gastos;
let rDependencia;
let actividad;
let montoASolicitar;

let sector = document.querySelector("#usuario div");
updateUserHTML();


let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", agregarUsuario);

function agregarUsuario (usuario){
    usuario.preventDefault()
    fName = (formulario.children[0].value);
    lName = (formulario.children[1].value);
    age = (formulario.children[2].value);
    documento = (formulario.children[3].value);
    estadoCivil = (formulario.children[4].value);
    income = (formulario.children[5].value);
    gastos = (formulario.children[6].value);
    rDependencia = (formulario.children[7].value);
    actividad = (formulario.children[8].value);
    montoASolicitar = (formulario.children[9].value); 
    let newUser = new Usuario(fName, lName, age, documento, estadoCivil,
        income, gastos, rDependencia, actividad, montoASolicitar, usuarios.length + 1);
    usuarios.push(newUser);
    console.log("se agrego el usuario", newUser);
    alert(`Se agrego el usuario ${newUser.fName} ${newUser.lName}`)
    updateUserHTML()
}



function updateUserHTML(){
    sector.innerHTML = "";
    usuarios.forEach((user) => {
        let cont = document.createElement("div");

        cont.innerHTML = `<h3>${user.fName} ${user.lName} </h3>
                        <p>ID: ${user.id}</p>
                        <p>Edad: ${user.age}</p>
                        <p>Documento: ${user.documento}</p>
                        <p>Estado Civil: ${user.estadoCivil}</p>
                        <p>Ingreso: ${user.income}</p>
                        <p>Gastos: ${user.gastos}</p>
                        <p>Relacion de dependencia: ${user.rDependencia}</p>
                        <p>Actividad: ${user.actividad}</p>
                        <p>Monto a Solicitar: ${user.montoASolicitar}</p>`;
        sector.appendChild(cont);
    } )
}


//Simulador
let miSimulador = document.querySelector("#simulador");
miSimulador.addEventListener("submit", iniSimulacion);


function iniSimulacion(usuario){
    usuario.preventDefault();
    let userE = parseInt((simulador.userElegido.value));
    let userElegido = userE - 1;

        if (usuarios[userElegido].age <= 25 && usuarios[0].montoASolicitar >= 30000){
            console.log("No le podremos dar un prestamo");
            alert("No le podremos dar un prestamo");
        }
        else if (usuarios[userElegido].income <= usuarios[userElegido].montoASolicitar / 60) {
            console.log("No sera posible otorgarle un prestamo");
            alert("No sera posible otorgarle un prestamo");
        }
        else if(usuarios[userElegido].gastos >= usuarios[userElegido].income ) {
            console.log("No sera posible otorgarle un prestamo. Sus gastos son mayores o iguales a sus ingresos");
            alert("No sera posible otorgarle un prestamo. Sus gastos son mayores o iguales a sus ingresos")
        }
        else {
            console.log("Fue aceptado para recibir un prestamo. Nos estaremos contactando con usted");
            alert("Fue aceptado para recibir un prestamo. Nos estaremos contactando con usted");
    }
}
















//Codigo Pre entrega 1


/*
//Cycle
do {
    option = parseInt(prompt(`Ingrese 1 para agregar usuario. \nIngrese 2 para ver un usuario.
Ingrese 3 para ver todos los usuarios creados. \nIngrese 4 para eliminar un usuario.
Ingrese 5 para eliminar todos los usuarios. \nIngrese 6 para que empiece la simulacion. \nIngrese 7 para salir.`));
    switch (option) {
        case 1:
            agregarUsuario(usuarios);
            break;
        case 2:
            verUsuario(usuarios);
            break;
        case 3:
            verTodosLosUsuarios(usuarios);
            break;
        case 4:
            eliminarUsuario(usuarios);
            break;
        case 5:
            eliminarTodos(usuarios);
            break;
        case 6:
            iniSimulacion(usuarios);
        default:
            break;
    }   
} while (option != 7);



//Agregar Usuario
function agregarUsuario (usuarios){
    let fName = prompt("Ingrese Nombre");
    let lName = prompt("Ingrese Apellido");
    let age = parseInt(prompt("Ingrese Edad"));
    let document = parseInt(prompt("Ingrese Documento"));
    let estadoCivil = prompt("Ingrese su estado civil \n Casado/a - Soltero/a")
    if (estadoCivil == "casado" || estadoCivil == "Casado" 
    || estadoCivil == "casada" || estadoCivil == "Casada"){
        estadoCasado(estadoCivil)
    }
    let income = parseInt(prompt("Ingrese su sueldo neto mensual en USD"));
    let gastos = parseInt(prompt("Ingrese sus gastos mensuales en USD"));
    let rDependencia = prompt("Trabajas en relacion de dependencia?");
    let actividad = prompt("Tipo de trabajo");
    let montoASolicitar = parseInt(prompt("Ingrese el monto que desea solicitar en USD"));

    let newUser = new Usuario(fName, lName, age, document, estadoCivil,
        income, gastos, rDependencia, actividad, montoASolicitar, usuarios.length + 1);
    usuarios.push(newUser);
    console.log("se agrego el usuario", newUser);
    alert(`Se agrego el usuario ${newUser.fName} ${newUser.lName}`)
}


function estadoCasado (estadoCivil){
    let family = parseInt(prompt("Ingrese cantidad de Hijos/as"));
        if (family <=10){
            for (index = 1; index <= family; index++){
            let nameHijos = prompt("Ingrese nombre de su hijo N" + index)     
            }
        }
}

//Add User to HTML
for (const usuario of usuarios) {
    let sec = document.getElementById("usuario");
    let cont = document.createElement("div");

    cont.innerHTML = `<h3>${usuario.fName} ${usuario.lName} </h3>
                    <p>Edad: ${usuario.age}</p>
                    <p>Documento: ${usuario.document}</p>
                    <p>Estado Civil: ${usuario.estadoCivil}</p>
                    <p>Ingreso: ${usuario.income}</p>
                    <p>Gastos: ${usuario.gastos}</p>
                    <p>Relacion de dependencia: ${usuario.rDependencia}</p>
                    <p>Actividad: ${usuario.actividad}</p>
                    <p>Monto a Solicitar: ${usuario.montoASolicitar}</p>
                    <p>ID: ${usuario.id}</p>`;
    sec.appendChild(cont);
    
}


//Ver UN usuario
function verUsuario(usuarios){
    let texto = "";
    for (let index = 0; index < usuarios.length; index++) {
        texto = texto.concat(
            `Ingrese ${index + 1} para el usuario ${usuarios[index].fName} \n`
        );      
    }
    const option = parseInt(prompt(texto));
    console.log("Usuario pedido:", usuarios[option - 1]);
    alert(`En la consola podra ver los datos del usuario`);
}


//Ver TODOS los usuarios
function verTodosLosUsuarios(usuarios) {
    for (const user of usuarios) {
        console.log(user);
    }
}


//Eliminar un usuario
function eliminarUsuario(usuarios){
    let text3 = "";
    for (let index = 0; index < usuarios.length; index++) {
        text3 = text3.concat(
            `Ingrese ${index + 1} para el usuario ${usuarios[index].fName} \n`
            ); 
    }
    const numeroElegido = parseInt(prompt(text3));
    const userElegido = numeroElegido - 1;
    usuarios.splice(userElegido,1);
    console.log(usuarios);
}


//Eliminar todos los usuarios
function eliminarTodos(usuarios){
    usuarios.splice(0, usuarios.length);
    console.log("Todos los usuarios fueron eliminados correctamente");
    alert("Todos los usuarios fueron eliminados correctamente");
}


//Simulador
function iniSimulacion(usuarios){
    let text2 = "";
    for (let index = 0; index < usuarios.length; index++) {
        text2 = text2.concat(
            `Ingrese ${index + 1} para el usuario ${usuarios[index].fName} \n`
        );      
    }
    const numeroElegido = parseInt(prompt(text2));
    const userElegido = numeroElegido - 1;
        if (usuarios[userElegido].age <= 25 && usuarios[userElegido].montoASolicitar >= 30000){
            console.log("No le podremos dar un prestamo");
            alert("No le podremos dar un prestamo");
        }
        else if (usuarios[userElegido].income <= usuarios[userElegido].montoASolicitar / 60) {
            console.log("No sera posible otorgarle un prestamo");
            alert("No sera posible otorgarle un prestamo");
        }
        else if(usuarios[userElegido].gastos >= usuarios[userElegido].income ) {
            console.log("No sera posible otorgarle un prestamo. Sus gastos son mayores o iguales a sus ingresos");
            alert("No sera posible otorgarle un prestamo. Sus gastos son mayores o iguales a sus ingresos")
        }
        else {
            console.log("Fue aceptado para recibir un prestamo. Nos estaremos contactando con usted");
            alert("Fue aceptado para recibir un prestamo. Nos estaremos contactando con usted");
    }
}
*/