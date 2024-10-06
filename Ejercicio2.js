let contenedor = document.querySelector(".contenedor-app")

let disminuir = document.getElementById("disminuir")

let button = document.createElement("button")

let mensaje = document.createElement("p")

button.textContent = "incrementar"

let incremento = 0

button.addEventListener("click", () => {
    incremento++
    mensaje.textContent = incremento
    mensaje.style.color = "green"
    contenedor.appendChild(mensaje)

})

disminuir.addEventListener("click", () => {
    incremento--
    mensaje.textContent = incremento
    mensaje.style.color = "red"
    contenedor.appendChild(mensaje)
})

contenedor.appendChild(button)