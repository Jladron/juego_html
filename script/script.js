var personaje = document.getElementById("personaje");

document.addEventListener("click", salto);

function salto() {

    if (personaje.classList == "animacion") {
        return;
    }

    personaje.classList.add("animacion");
    setTimeout(eliminarSalto, 300);
}

function eliminarSalto() {
    personaje.classList.remove("animacion");
}

var block = document.getElementById("block");

function comprobarMuerte() {
    let personajeTop = parseInt(window.getComputedStyle(personaje).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > -20 && personajeTop >= 130) {
        alert("Game Over");
    }
}


setInterval(comprobarMuerte, 10);