
document.querySelector("#entrar").addEventListener("click", registrar)
const form = document.getElementById("form")

const usuariosArray =
    [
        {
            userId: 1,
            userName: "juan",
            email: "juan@gmail.com",
            password: "1324",
            name: "juan"

        },
        {
            userId: 2,
            userName: "pedro",
            email: "pedro@gmail.com",
            password: "1324",
            name: "pedro"

        },
        {
            userId: 3,
            userName: "luis",
            email: "carlos@gmail.com",
            password: "1324",
            name: "luis"

        },
    ]
inicializarLocalStorage()


//CREAMOS UNA FUNCION PARA REGISTRAR CADA USUARIO PONIENDO UN USER [] PARA AGREGAR A UN ARRAY VACIO.
function registrar(e) {
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem("Usuarios")),
        correoElectronico = "",
        contraseña = "";

    correoElectronico = document.querySelector("#txt-user").value;
    contraseña = document.querySelector("#txt-password").value;

    if (correoElectronico <= 0 && contraseña <= 0) {
        return alert("El campo no puede estar vacio")
    }
    
    const user = users.find((value) => value.email == correoElectronico && value.password == contraseña)

    
    if(user){
        localStorage.setItem( "nombreUsuario", user.userName)
        window.location = "bienvenida.html"

    }else{
        alert("Usuario o contraseña incorrectos")
    }


}

function inicializarLocalStorage() {
    const usuarios = localStorage.getItem("Usuarios")
    if (!usuarios) {
        localStorage.setItem("Usuarios", JSON.stringify(usuariosArray))
    }
}


//CREAMOS ESTA FUNCION PARA REGISTRAR A LOS USUARIOS Y MEDIANTE UN PUSH SUBIMOS A CADA USUARIO.


function getUser() {
    return usuarios;
}

function mostrarDatos() {
    let personas = getUser;
    return personas;
}

