// arma un array de 100 elementos y llenalo con numeros del 0 al 9 al azar.
myAsortedArr=[];

function createNewAsortedArray () {
    for (let i = 0; i <100; i ++){
        myAsortedArr[i] = Math.floor(Math.random() * 10);
    }
    return myAsortedArr
}
createNewAsortedArray();
console.log("crea un array de 100 elementos, del 0 al 9 al azar--------------","\n\n\n" ,myAsortedArr)

// hace una funcion que recorra el array y extraiga los numeros par.

function myPairNumbers (_myArr) {
let pairNums = [];
    for(let i = 0; i <= _myArr.length; i++) {
        if (_myArr[i] % 2 === 0) {
            pairNums.push(_myArr[i]); 
          }
    }
    return pairNums
}

console.log("extrae numeros par------------------","\n\n\n" ,myPairNumbers(myAsortedArr))


// luego hacer un array que tenga valores del 0 al 99 en orden y hacer las siguientes operaciones sobre el mismo: 
let arrayFromZeroTill99 = []

function createNewArray () {
    
    for(let i = 0; i <=99 ; i ++) {
        arrayFromZeroTill99[i] = i;
    }
    return arrayFromZeroTill99
}
createNewArray();

console.log("array de cero a 99 ---------------------","\n\n\n" ,arrayFromZeroTill99);

//  - recorrer el array cada dos elementos e imprimir el valor 

let arrayValueFor2 = []

function check2elements () {
    for (let i = 0; i < arrayFromZeroTill99.length; i+= 2) {
        arrayValueFor2.push(arrayFromZeroTill99[i])
    }    
    return arrayValueFor2;
        
    };

check2elements();
console.log("array cada dos elementos------------------------","\n\n\n" ,arrayValueFor2)


//  - recorrer el array desde la mitad y hasta el final e imprimir los valores

let arrayMiddle = [];
function newArrayRead() {
    var a = arrayFromZeroTill99.length;
    for (let i = arrayFromZeroTill99.length / 2; i < a; i++) {
        arrayMiddle.push(arrayFromZeroTill99[i])
    }
    return arrayMiddle
};

newArrayRead();

console.log("array desde la mitad hasta el final ----------------------------------","\n\n\n" ,arrayMiddle)
//  - recorrer el array de atras hacia adelante 

arrayFromBackToBegginig = [];

function multiFor10 () {
    for(let i = arrayFromZeroTill99.length -1 ; i >= 0; i--) { 
// extraer un array con los numeros que sean multiplo de 3
        if(arrayFromZeroTill99[i] % 2 !== 0) {
//luego recorrer ese array y multiplicar cada valor por 10.
            arrayFromBackToBegginig.push(arrayFromZeroTill99[i] * 10)
        }
    }
    return arrayFromBackToBegginig;
}
multiFor10();

console.log("array de atras para adelante---------------------------------------","\n\n\n" ,arrayFromBackToBegginig)

