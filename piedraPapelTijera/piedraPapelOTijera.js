// Ejercicio práctico: Piedra Papel o Tijera:


// // En un nuevo archivo crea una función que devuelva piedra, papel o tijera al azar.
let piedra = 0;
let papel = 1;
let tijera = 2;

function randomChoice () { 
    return Math.floor(Math.random() * 3) 
}


// // Crear una función que reciba 2 parámetros (que serian lo q jugo cada uno de los 2 jugadores) y devuelva 1 si ganó el player 1 y 2 si ganó el player 2. Y 0 si fue empate.


function resultadoPartida (player1, player2) {
    if (player1 === player2) {
    return 0
    }
    if( player1 === piedra && player2 === papel) {
    return 2
    }
    if (player1 === papel && player2 ===tijera) {
    return 2
    }
    if (player1 === tijera && player2 === piedra) {
    return 2
    }
    if( player2 === piedra && player1 === papel) {
    return 1
    }
    if (player2 === papel && player1 === tijera) {
    return 1
    }
    if (player2 === tijera && player1 === piedra) {
    return 1
    }
}
// // Luego crear una función que juegue una partida de 3 manos y devuelva quien ganó. Las manos que resultaron en empate deben repetirse.
function playManyMatches (x) {

    
    let rondasGanadasJugador1 = 0;
    let rondasGanadasJugador2 = 0;

    for (let i = 0; i < x; i++) {
        
    let player1 = randomChoice();
    let player2 = randomChoice();

        if(resultadoPartida(player1,player2)=== 0){
            i--;
        }
        if(resultadoPartida(player1,player2) === 1) {
            rondasGanadasJugador1 += 1;
        }
        if(resultadoPartida(player1,player2) === 2) {
            rondasGanadasJugador2 += 1
        }
        if (rondasGanadasJugador1 > rondasGanadasJugador2) {
            return "gana Jugador 1"
        }
        if (rondasGanadasJugador1 < rondasGanadasJugador2) {
            return "gana Jugador 2"
        } 
    }
}



playManyMatches()
console.log(" piedra papel o tijera " , playManyMatches(3))


