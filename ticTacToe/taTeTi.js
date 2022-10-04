// Los datos los vas a estar guardando en una variable `board` que tendrá un array, y dentro de ese array otro array más. Esto se llama array de 2 dimensiones, o matriz (eh.. si, matrix viene de aca).
// La matriz se usa de la siguiente manera

let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

// de manera que si el jugador que marca x quiere hace una línea, lo hará de la siguiente manera:
//board[2][1] = "x";

// Hacé una función `play` que reciba 3 parámetros, la coordenada x (que puede tener los valores 1, 2 o 3), la coordenada y (valores posibles 1, 2 o 3). y el tercer parámetro `mark` será 'o' o 'x'.


// Esta función debe lanzar una excepción si intentas marcar un casillero que ya está ocupado.
// Como una regla del ta-te-ti es que juegue un turno cada persona, esta función debe lanzar un error si intentas jugar un turno 2 veces con la misma marca 'x' u 'o'.


let x = 0;
let y = 0;
let X = "X";
let O = "O";
let lastPlayer = "";
function play (x,y,_mark) {

    if (lastPlayer === _mark){
       
       board = "you cant play twice"
    }

    lastPlayer = _mark
// selection of coordenada X
    if (x === 1){ 
        x = 0
    }
    if ( x === 2) {
        x = 1
    }
    if (x === 3) {
        x = 2
    }
// selection of coordenada Y & una validacion que no deje jugar en una posicion ocupada

    if (y === 1 && board [x][0] === null){ 
        board [x][0] = _mark
    }

    if ( y === 2 && board [x][1] === null) {
        board [x][1] = _mark
    }

    if (y === 3 && board [x][2] === null) {
        board [x][2] = _mark
    }
 

}

function playO(x,y) {
    play(x,y,O);
}
function playX(x,y) {
    play(x,y,X);
}
// selection Mark


// una validacion que no deje jugar dos veces seguidas al mismo jugador, siempre la primera jugada sea de X
  
   
// function last_player () {
//     if()

// }

// validation of play


function initialize () {
    lastPlayer = ""
     board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
        ]
    }

play(1,1,O);

play(1,2,X);

play(2,2,O);

play(2,1,X);
play(2,3,O);
play(3,1,X);
initialize();
play(1,1,X);
initialize();
playX(1,1);
playO(2,2);
playX(1,3);
playO(1, 2);
playX(3,2);
playO(3, 3);
playX(3,1);
console.log ("asd", lastPlayer)


// initialice();

console.table(board)
// console.log ("asd","\n", board[0], "\n",  board [1],"\n", board [2] ,"\n",  play(1,2, O), play(1,1,X))

// Es decir, con el tablero recién inicializado:

// let board = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ]

// al llamar la función con los siguientes parámetros:
// mark(3, 1, 'o')
// el tablero quedará en el siguiente estado:

// let board = [
//   [null, null, 'o'],
//   [null, null, null],
//   [null, null, null],
// ]

// Además deben existir las siguientes funciones:
//  - setupBoard que devuelve un board inicializado.
//  - playX que recibe unicamente los parámetros x e y.
//  - playO, igual a la anterior pero para 'o'.
