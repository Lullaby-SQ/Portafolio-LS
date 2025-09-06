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

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    hamburger.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
});