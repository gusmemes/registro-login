
const borrar = document.getElementById("borrarDatos")
const saludo = document.getElementById("saludo")

let nombreUsuario = localStorage.getItem("nombreUsuario")


saludo.innerHTML = "Bienvenido " + JSON.stringify(nombreUsuario)


function borrarDatos() {
  localStorage.removeItem("nombreUsuario")
  return window.location.href = "login.html"

}

