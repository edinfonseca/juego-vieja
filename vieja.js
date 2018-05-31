let jugador = 1;
let jugadas1 = [];
let jugadas2 = [];
let modoDeJuego = 1;
let ganador = false;
let puestosDisponibles = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
const cuadros = document.getElementsByName("espacio");

function juego() {
    cuadros.forEach((valor) => {
        valor.addEventListener('click', jugar);
    });

    function jugar(ev) {

        if (jugador == 1) {
            ev.srcElement.textContent = "X";
            puestosDisponibles = puestosDisponibles.filter((puesto) => puesto != ev.target.id);
            ev.srcElement.removeEventListener('click', jugar);
            console.log("Array despues de Jugada 1= " + puestosDisponibles);
            console.log("Let Jugador= " + jugador);
            if (puestosDisponibles.length < 5) {
                // Creo que se podria uitlizar un generador para solvertar la funcionabilida de validarGanador()
                if (validarGanador(["A1", "B1", "C1"])) {
                    ganador = true;

                } else if (validarGanador(["A2", "B2", "C2"])) {
                    ganador = true;
                } else if (validarGanador(["A3", "B3", "C3"])) {
                    ganador = true;
                } else if (validarGanador(["A1", "A2", "A3"])) {
                    ganador = true;
                } else if (validarGanador(["B1", "B2", "B3"])) {
                    ganador = true;
                } else if (validarGanador(["C1", "C2", "C3"])) {
                    ganador = true;
                } else if (validarGanador(["A1", "B2", "C3"])) {
                    ganador = true;
                } else if (validarGanador(["A3", "B2", "C1"])) {
                    ganador = true;
                }

                if (ganador){
                    swal("ganador");
                    puestosDisponibles.length = 0;
                }


            }

            if (puestosDisponibles.length == 0) {
                document.removeEventListener('click', jugar);
                setTimeout(() => alert("GAME OVER!!!"), 0);
                // alert("GAME OVER 2");
            }

            jugador = 2;
        }

        else {
            ev.srcElement.textContent = "O";
            puestosDisponibles = puestosDisponibles.filter((puesto) => puesto != ev.target.id);
            ev.srcElement.removeEventListener('click', jugar);
            jugador = 1;
            console.log("Array despues de Jugada 2= " + puestosDisponibles);
            console.log("Let Jugador2= " + jugador);
        }
    }

    function validarGanador() {

    }

// if(modoDeJuego)

// function validarGanador() {
//
//
// }


}


function onclick(ev) {
    console.log(ev);
    // console.log("hola");
    // console.log(ev.srcElement);

    let el = document.getElementById(ev.target.id);
    ev.srcElement.textContent = "X"
    // el.textContent = "X"
}

function juegoNuevo() {
    //

}

juego();