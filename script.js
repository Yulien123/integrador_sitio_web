/* const form*/
const nombre = document.getElementById("myname"),
    apellido = document.getElementById("surname"),
    correo = document.getElementById("email"),
    celular = document.getElementById("mobile"),
    contrasenha = document.getElementById("pw"),
    contrasenha2 = document.getElementById("repeatPw"),
    form = document.getElementById("form"),
    listInputs = document.querySelectorAll(".form-input"); /*para los que se repiten*/

/* const carrousel*/
const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");

/* Formulario */
let terminosYCondiciones = document.getElementById("termsAndConditions");
let tYc = terminosYCondiciones.checked;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
        enviarFormulario();
        document.getElementById("form").reset
    }
});

function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach(element => {
        element.lastElementChild.innerHTML = "";
    });

    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        mostrarMensajeError("myname", "Nombre no valido*");
        condicion == false;
    }
    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        mostrarMensajeError("surname", "Apellido no valido*");
        condicion == false;
    }
    if (apellido.value.length < 1 || apellido.value.trim() == "") {
        mostrarMensajeError("email", "Correo no valido*");
        condicion == false;
    }
    if (correo.value.length < 1 || correo.value.trim() == "") {
        mostrarMensajeError("email", "Correo no valido*");
        condicion == false;
    }
    if (celular.value.length < 10 ||
        celular.value.trim() == "" ||
        isNaN(celular.value)
    ) {
        mostrarMensajeError("mobile", "Celular no valido*");
        condicion == false;
    }
    if (contrasenha.value.length < 1 || contrasenha.value.trim() == "") {
        mostrarMensajeError("pw", "Contraseña no valida*");
        condicion == false;
    }
    if (contrasenha2.value != contrasenha.value || contrasenha2.value.trim() == "") {
        mostrarMensajeError("repeatPw", "La contraseña no coincide con la anterior*");
        condicion == false;
    }
    if (!tYc) {
        mostrarMensajeError("termsAndConditions", "Debe aceptar los terminos*");
        condicion == false;
    } else {
        mostrarMensajeError("termsAndConditions", "");
    }
    return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    form.request();
    form.lastElementChild.innerHTML = "Listo !";
}

/* Carrousel */

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   