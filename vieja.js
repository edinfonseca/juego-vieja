let jugador = 1;
let jugadas1 = [];
let jugadas2 = [];
let modoDeJuego = 1;
let ganador = false;
let puestosDisponibles = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
const cuadros = document.getElementsByName("espacio");

function iniciarJuego() {
    cuadros.forEach((valor) => {
        valor.addEventListener('click', jugar);
    });

    function jugar(ev) {
        // if (puestosDisponibles.length == 0) {
        //     document.removeEventListener('click', jugar);
        //     setTimeout(() => alert("GAME OVER!!!"), 0);
        //     // alert("GAME OVER 2");
        // }
        if (jugador == 1) {
            ev.srcElement.textContent = "X";
            // Otra forma es con un indexOf() y splice()
            puestosDisponibles = puestosDisponibles.filter((puesto) => puesto != ev.target.id);
            jugadas1.push(ev.target.id);
            ev.srcElement.removeEventListener('click', jugar);
            if (puestosDisponibles.length < 5) {
                ganador = true;
                if (validarGanador(jugadas1)) {
                    swal({
                        title: "¡Felicitaciones!",
                        text: "Jugador X ha Ganado!!!",
                        buttons: false,
                        timer: 1500,
                    });
                    puestosDisponibles.length = 0;
                }
            }
            jugador = 2;
        } else {
            ev.srcElement.textContent = "O";
            puestosDisponibles = puestosDisponibles.filter((puesto) => puesto != ev.target.id);
            jugadas2.push(ev.target.id);
            ev.srcElement.removeEventListener('click', jugar);
            if (puestosDisponibles.length < 5) {
                ganador = true;
                if (validarGanador(jugadas2)) {
                    swal({
                        title: "¡Felicitaciones!",
                        text: "Jugador O ha Ganado!!!",
                        buttons: false,
                        timer: 1500,
                    });
                    puestosDisponibles.length = 0;
                }
            }
            jugador = 1;
        }

        if (puestosDisponibles.length == 0) {
            let delay = 0;
            if(ganador){
                delay = 2000;
            }else{
                delay = 500;
            }
            document.removeEventListener('click', jugar);

            setTimeout(() => {
                swal({
                    title: "¡Game Over!",
                    text: "Juego Terminado!!!",
                    buttons: false,
                });
            }, delay);
            // alert("GAME OVER 2");
        }
    }

    function validarGanador(jugadas) {
        if ((["A1", "B1", "C1"].filter((ganadora) => jugadas.includes(ganadora)).length) == 3) return true;
        if ((["A2", "B2", "C2"].filter((ganadora) => jugadas.includes(ganadora)).length) == 3) return true;
        if ((["A3", "B3", "C3"].filter((ganadora) => jugadas.includes(ganadora)).length) == 3) return true;
        if ((["A1", "A2", "A3"].filter((ganadora) => jugadas.includes(ganadora)).length) == 3) return true;
        if ((["B1", "B2", "B3"].filter((ganadora) => jugadas.includes(ganadora)).length) == 3) return true;
        if ((["B1", "B2", "B3"].filter((ganadora) => jugadas.includes(ganadora)).length) == 3) return true;
        if ((["C1", "C2", "C3"].filter((ganadora) => jugadas.includes(ganadora)).length) == 3) return true;
        if ((["A1", "B2", "C3"].filter((ganadora) => jugadas.includes(ganadora)).length) == 3) return true;
        if ((["A3", "B2", "C1"].filter((ganadora) => jugadas.includes(ganadora)).length) == 3) return true;
        return false;
    }
}

function juegoNuevo() {
    //
}

iniciarJuego();