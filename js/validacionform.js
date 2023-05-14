const $formulario = document.getElementById("formulario");

const $inputs = document.querySelectorAll("#formulario input")


// --------- EXPRESIONES REGULARES ---------------
const expresiones = {
   nombre:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
       correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
    telefono: /^\d{7,14}$/ // ACEPTARA MINIMO 7 Y MAXIMO 14 NÚMEROS
}


const campos = {
    nombre: false,
   apellido: false,
        correo: false,
    telefono: false
}


// --------- SWITCH PARA SELECCIONAR EL INPUT DONDE ÉSTE HACIENDO FOCO EL USUARIO  ---------------
const validarFormulario = (e) => {
    console.log(e)
    switch(e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");

        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, "apellido");
        break;
        
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
        break;
    }
}


// -------------- VALIDACION DE INPUTS ------------------------
const validarCampo = (expresion, input, campo) => {
    console.log(expresion, input, campo)
    console.log(expresion.test(input.value))
    if (expresion.test(input.value)){
        
        document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto");
        document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-correcto");
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
        console.log("Funciona");
    } else {
           document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-incorrecto");
           document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-correcto");
           document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
           campos[campo] = false;
           console.log("Funciona");
        }
}




// --------- CAPTURAMOS CADA VEZ QUE EL USUARIO PRESIONA UNA TECLA ---------------
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});



// --------- VALIDAMOS TODO NUESTRO FORMULARIO ---------------
$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if(campos.nombre && campos.apellido &&  campos.correo && campos.telefono ) {

        document.getElementById("formulario_mensaje-exito").classList.add("formulario_mensaje-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario_mensaje-exito").classList.remove("formulario_mensaje-exito-activo");
            document.getElementById("formulario__grupo-terminos").style.display = "none";
            
        }, 3000);
        
        document.querySelectorAll(".formulario__grupo--correcto").forEach ((icono) => {
            icono.classList.remove("formulario__grupo--correcto");
        });
        
        setTimeout(() => {
            location.reload();
        }, 5000);

    } else {
        document.getElementById("formulario_mensaje").classList.add("formulario_mensaje-activo");
    }
});