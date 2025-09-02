document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        const Nombre = document.getElementById('Nombre').value;
        const Email = document.getElementById('Email').value;
        const Mensaje = document.getElementById('Mensaje').value;
        alert(`Datos ingresados: \nNombre: ${Nombre}\nEmail: ${Email}\nMensaje: ${Mensaje}`);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    hamburger.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});