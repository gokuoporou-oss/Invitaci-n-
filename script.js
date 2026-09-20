const sobre = document.getElementById("sobre");
const invitacion = document.getElementById("invitacion");

sobre.addEventListener("click", () => {

    sobre.classList.add("abierto");

    setTimeout(() => {
        invitacion.classList.add("mostrar");
    }, 700);

});

function confirmar() {
    alert("🎉 ¡Gracias por confirmar tu asistencia!");
}