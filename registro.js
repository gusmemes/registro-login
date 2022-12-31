
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const formulario = document.getElementById("form");
const parrafo = document.getElementById("warning")


formulario.addEventListener("submit", e => {
    e.preventDefault()
    let user = [],
        correo = "",
        correo2 = "",
        contraseña = "",
        contraseña2 = ""
    correo = document.querySelector("#correo").value;
    correo2 = document.querySelector("#correo2").value;
    contraseña = document.querySelector("#contraseña").value;
    contraseña2 = document.querySelector("#contraseña2").value;


    let warning = "";

    let entrar = false;
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

    parrafo.innerHTML = "";
    if (nombre.length < 6) {
        warning += `El nombre no es valido <br>`
        entrar = false;
    }
    if (entrar) {
        parrafo.innerHTML = warning;
    } else {
        parrafo.innerHTML = "Enviado"
    }

    if (!regexEmail.test(correo.length.value)) {
        warning += `el email no es valido <br>`
        entrar = true;
    }

    if (correo2 !== correo) {
        entrar = false;
        alert("Los correos no coinciden")
        return;
    }

    if (contraseña.length < 4) {
        alert("contraseña muy corta")
        entrar = false;
        return;
    }

    if (contraseña2 !== contraseña) {
        entrar = false;
        alert("las contraseñas no coinciden")
        return;

    } else if (contraseña2 == contraseña) {
        window.location = "login.html"
    }


    guardarDatos()

    function guardarDatos() {
        const usuarios = JSON.parse(localStorage.getItem("Usuarios"))
       
        usuarios.push({
            userId: usuarios.length + 1,
            userName: document.querySelector("#nombre").value,
            email: document.querySelector("#correo").value,
            password: document.querySelector("#contraseña").value,
            name: document.querySelector("#nombre").value
        })

        localStorage.setItem("Usuarios", JSON.stringify(usuarios))

    }

})


//CREAMOS ESTA FUNCION PARA REGISTRAR A LOS USUARIOS Y MEDIANTE UN PUSH SUBIMOS A CADA USUARIO.

function registrarUser(user) {
    usuarios.push(user)
    console.log(usuarios)
}

function getUser() {
    return usuarios;
}

function mostrarDatos() {
    let personas = getUser;
    return personas;
}

