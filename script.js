document.addEventListener ('DOMContentLoaded', function(){
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        const Nombre = document.getElementById('Nombre').value;
        const Email = document.getElementById('Email').value;
        const Mensaje = document.getElementById('Mensaje').value;
        alert(`Datos ingresados: \nNombre: ${Nombre}\nEmail: ${Email}\nMensaje: ${Mensaje}`);
    });
});