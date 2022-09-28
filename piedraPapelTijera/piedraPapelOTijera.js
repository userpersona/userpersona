// // Ejercicio práctico: Piedra Papel o Tijera:


// // // En un nuevo archivo crea una función que devuelva piedra, papel o tijera al azar.
// let piedra = 0;
// let papel = 1;
// let tijera = 2;

// function randomChoice () { 
//     return Math.floor(Math.random() * 3) 
// }

// // randomChoice()
// // console.log(randomChoice())


// // // function piedraPapelTijera(){
// // //     if (randomChoice() === 0){
// // //         return piedra
// // //     }
// // //     if(randomChoice() === 1) {
// // //         return papel
// // //     }
// // //     if(randomChoice() === 2) {
// // //         return tijera
// // //     }
    
// // // }
// // // randomChoice();
// // // piedraPapelTijera();
// // // console.log("hello",randomChoice())
// // // console.log("hello2",piedraPapelTijera())

// // // Crear una función que reciba 2 parámetros (que serian lo q jugo cada uno de los 2 jugadores) y devuelva 1 si ganó el player 1 y 2 si ganó el player 2. Y 0 si fue empate.

// // let player1 = randomChoice ();
// // let player2 = randomChoice ();

// function resultadoPartida (player1, player2) {
//     if (player1 === player2) {
//     return 0
//     }
//     if( player1 === piedra && player2 === papel) {
//     return 2
//     }
//     if (player1 === papel && player2 ===tijera) {
//     return 2
//     }
//     if (player1 === tijera && player2 === piedra) {
//     return 2
//     }
//     if( player2 === piedra && player1 === papel) {
//     return 1
//     }
//     if (player2 === papel && player1 === tijera) {
//     return 1
//     }
//     if (player2 === tijera && player1 === piedra) {
//     return 1
//     }
// }
// // resultadoPartida(player1,player2)
// // // console.log(resultadoPartida(player1,player2))
// // // console.log(resultadoPartida(player1,player2))
// // // Luego crear una función que juegue una partida de 3 manos y devuelva quien ganó. Las manos que resultaron en empate deben repetirse.
// function playManyMatches (x) {

    
//     let rondasGanadasJugador1 = 0;
//     let rondasGanadasJugador2 = 0;

//     for (let i = 0; i < x; i++) {
        
//     let player1 = randomChoice();
//     let player2 = randomChoice();

//         if(resultadoPartida(player1,player2)=== 0){
//             i--;
//         }
//         if(resultadoPartida(player1,player2) === 1) {
//             rondasGanadasJugador1 += 1;
//         }
//         if(resultadoPartida(player1,player2) === 2) {
//             rondasGanadasJugador2 += 1
//         }
//         if (rondasGanadasJugador1 > rondasGanadasJugador2) {
//             return "gana Jugador 1"
//         }
//         if (rondasGanadasJugador1 < rondasGanadasJugador2) {
//             return "gana Jugador 2"
//         } 
//     }
// }

// // function betterOf (x) {
// //    pl
   
// //         if(playAMatch === "gana jugador 1"){
// //             rondasGanadasJugador1 += 1
// //         }
// //         if(playAMatch === "gana jugador 2"){
// //             rondasGanadasJugador2 += 1
// //         }
// //         if(playAMatch === "empate"){
// //             i --;
// //             continue;
// //         }
// //         if (rondasGanadasJugador1 > rondasGanadasJugador2) {
// //             return "gana Jugador 1"
// //         }
// //         if (rondasGanadasJugador1 < rondasGanadasJugador2) {
// //             return "gana Jugador 2"
// //         }
// //     }
// // }


// // console.log("al mejor de 3",betterOf(3))
// // partida()

// // console.log(partida());


// playManyMatches()
// console.log(playManyMatches(5))





let impossibleToFailTeam = [ 
    { 
    teamMember : "Mr. P",
    age : 40,
    duty : "editor"
    },
    {
    teamMember : "Mr. M",
    age : 25,
    duty : "developer"
    },
    {
    teamMember : "User Persona",
    age : 25,
    duty : "spirit guide"
    },
    {
    teamMember : "Daniel Nuske",
    age : 35,
    duty : "team leader"
    },
]
let room = {
    metrosCuadrados: 0,


}



let tableDesk =
    {
    longitudEnCm : 120,
    widthOnCm : 50,
    heightonCm : 125,
    patas : 2
    }


let swimingPool = 
    {
    capacidadEnLitros: 300000,
    largoEnMetros : 25,
    anchoEnMetros : 15,
    profundidadMaximaEnMetros: 5,
    profundidadMinimaEnMetros: 1.5 ,
    }


let jean = {
        color: "azul",
        talle : 42,
        marca : "reverpass"
    }


let remera =
    {
        color : "negra",
        talle : "medium",
        estampado : "friends",
        marca : "warner brothers"
    }




function entradaEnCalor (_largos) {
    let cantidadDeMetros = 0;
    cantidadDeMetros = swimingPool.largoEnMetros * _largos
    return cantidadDeMetros + " metros"
}

console.log(entradaEnCalor(20))
























