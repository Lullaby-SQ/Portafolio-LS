document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-box');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const Nombre = document.getElementById('Nombre').value;
        const Email = document.getElementById('Email').value;
        const Mensaje = document.getElementById('Mensaje').value;
        if (!tieneNumeros(Nombre)) {
            alert(`Datos ingresados: \nNombre: ${Nombre}\nEmail: ${Email}\nMensaje: ${Mensaje}`);
        } else {
            alert("El nombre no puede llevar numeros");
        };
        });
    function tieneNumeros(name) {
    const confirmarnombre = /\d/;
    return confirmarnombre.test(name);
}
});

const nav = document.querySelector("#navegacion");
const abrir = document.querySelector("#desplegar");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    cerrar.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    cerrar.classList.remove("visible");
});