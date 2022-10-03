// Los datos los vas a estar guardando en una variable `board` que tendrá un array, y dentro de ese array otro array más. Esto se llama array de 2 dimensiones, o matriz (eh.. si, matrix viene de aca).
// La matriz se usa de la siguiente manera

let board = [
  [null, 'x', null],
  [null, 'x', 'o'],
  ['o', null, null],
]

// de manera que si el jugador que marca x quiere hace una línea, lo hará de la siguiente manera:
board[2][1] = "x";

// Hacé una función `play` que reciba 3 parámetros, la coordenada x (que puede tener los valores 1, 2 o 3), la coordenada y (valores posibles 1, 2 o 3). y el tercer parámetro `mark` será 'o' o 'x'.


// Esta función debe lanzar una excepción si intentas marcar un casillero que ya está ocupado.
// Como una regla del ta-te-ti es que juegue un turno cada persona, esta función debe lanzar un error si intentas jugar un turno 2 veces con la misma marca 'x' u 'o'.

function play ([x],[y],_mark) {
    let x = 0
    let y = 0

    if (x === 1){ 
        board [0]
    }
    if ( x === 2) {
        board [1]
    }
    if (x === 3) {
        board [2]
    }


    if (y === 1){ 
        board [x][0]
    }
    if ( x === 2) {
        board [x][1]
    }
    if (x === 3) {
        board [x][2]
    }

}

// Es decir, con el tablero recién inicializado:
```
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

// al llamar la función con los siguientes parámetros:
mark(3, 1, 'o')
// el tablero quedará en el siguiente estado:

let board = [
  [null, null, 'o'],
  [null, null, null],
  [null, null, null],
]

// Además deben existir las siguientes funciones:
//  - setupBoard que devuelve un board inicializado.
//  - playX que recibe unicamente los parámetros x e y.
//  - playO, igual a la anterior pero para 'o'.
