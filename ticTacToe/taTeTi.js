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

function play(x, y, _mark) {

    if (lastPlayer === _mark) {
       throw new Error("you cant play twice");
    }

   
    // selection of coordenada X
    // validation, just because
    if (x < 1 || x > 3) throw new Error("X can only be 1, 2 or 3") 
    x = x-1    
    if (y < 1 || y > 3) throw new Error("Y can only be 1, 2 or 3") 
    y = y-1 
    
    // selection of coordenada Y & una validacion que no deje jugar en una posicion ocupada

    if (board[y][x] !== null){ 
        throw new Error("the place is already taken")
    }

    lastPlayer = _mark
    board[y][x] = _mark
 
}
//  - playX que recibe unicamente los parámetros x e y.
function playO(x, y) {
    return play(x, y, O);
}

//  - playO, igual a la anterior pero para 'o'.
function playX(x, y) {
    return play(x, y, X);
}

// selection Mark


// una validacion que no deje jugar dos veces seguidas al mismo jugador, siempre la primera jugada sea de X
  
   
// function last_player () {
//     if()

// }

// validation of play


function setupBoard() {
    lastPlayer = "";
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
}

setupBoard();
playX(3, 3);
playO(2, 2);
playX(1, 1);
playO(1, 3);
playX(3, 1);
playO(3, 2);
playX(2, 1);
console.log("asd", lastPlayer);


// initialice();

console.table(board);
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


