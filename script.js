/*FORMULARIO */
var i = 0;
var imagenes = document.getElementById("img");
var carrousel = ["pexels-cottonbro-studio-3951409.jpg", "posible2.webp", "ingredientes_de_la_cerveza.jpg"];
var transitionId;

function siguiente() {
    if (i === carrousel.length - 1) {
        i = 0; 
    } else {
        i++;
    }
    imagenes.src = carrousel[i];
}

function anterior() {
    if (i === 0) {
        i = carrousel.length - 1;
    } else {
        i--;
    }
    imagenes.src = carrousel[i];
}

function autoTransition() {
transitionId = setInterval(siguiente, 3000); //transition
}

autoTransition();


/*formaulario*/
const ltaErrores = document.getElementById("ltaErrores");
const btnSaludar = document.getElementById("btnEnviar");

function ValidarFormulario() {
    let f_nombre = document.getElementById("f_nombre");
    let nombre = f_nombre.value.trim();
    let f_apellido = document.getElementById("f_apellido");
    let apellido = f_apellido.value.trim();
    let f_edad = document.getElementById("f_edad");
    let edad = f_edad.value.trim();
    let f_correo = document.getElementById("f_correo");
    let correo = f_correo.value.trim();
    let f_comentario = document.getElementById("f_comentario");
    let comentario = f_comentario.value.trim();
    let f_tyc = document.getElementById("f_tyc");
    let tyc = f_tyc.checked;
    let errores = [];
    let campo_error = null;

    let frm = document.getElementById("frm");

    for (v of frm.querySelectorAll("input,select,div")) {
        v.classList.remove("error");
    }

    if (nombre == "") {
        errores.push("Falta el nombre");
        campo_error = f_nombre;
        f_nombre.classList.add("error");
    }
    if (apellido == "") {
        errores.push("Falta el apellido");
        campo_error = f_apellido;
        f_apellido.classList.add("error");
    }
    if (edad == "" || edad < 18 || edad > 100) {
        errores.push("Edad incorrecta");
        campo_error = f_edad;
        f_edad.classList.add("error");
    }
    if (correo == "") {
        errores.push("Falta el correo");
        campo_error = f_correo;
        f_correo.classList.add("error");
    }
    if (comentario == "") {
        errores.push("Deja un comentario");
        campo_error = f_comentario;
        f_comentario.classList.add("error");
    }
    if (!tyc) {
        errores.push("Debe aceptar los términos y condiciones");
        campo_error = f_tyc;
        f_tyc.parentNode.classList.add("error");
    }
    ltaErrores.innerHTML = "";
    if (errores.length > 0) {
        for (let i = 0; i < errores.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = errores[i];
            ltaErrores.appendChild(li);
        }
        if (campo_error != null) {
            campo_error.focus();
        }
        return false;
    }

    let eSaludo = document.createElement("h5");
    eSaludo.innerHTML = `!Bienvenido a Heisenberg!`;
    document.getElementById("pSaludo").appendChild(eSaludo);

    let Enombre = document.createElement("p");
    Enombre.innerHTML = `Nombre: ${nombre}`;
    document.getElementById("nombreOut").appendChild(Enombre);

    let Eapellido = document.createElement("p");
    Eapellido.innerHTML = `Apellido: ${apellido}`;
    document.getElementById("apellidoOut").appendChild(Eapellido);

    let Eedad = document.createElement("p");
    Eedad.innerHTML = `Edad: ${edad}`;
    document.getElementById("edadOut").appendChild(Eedad);

    let Ecorreo = document.createElement("p");
    Ecorreo.innerHTML = `Email: ${correo}`;
    document.getElementById("correoOut").appendChild(Ecorreo);

    let Ecomentario = document.createElement("p");
    Ecomentario.innerHTML = `${nombre} dice: ${comentario}`;
    document.getElementById("comentarioOut").appendChild(Ecomentario);
    /*para cuando haga clic en enviar se aparezca el div */
    var miDiv = document.getElementById("miDiv");
    miDiv.style.display = "block";

    document.getElementById("frm").reset();
    return false;
}