// haciendo un store de NFTs se me presentó el siguiente requerimiento, 
// debo convertir un array que contiene unos filtros en un objeto que pueda utilizar esos datos para mostrar en pantalla.

// Debés hacer una funcion que reciba un array asi:
let myArr = [
    { "type": "Background", "name": "M1 Army Green", "occurrence": 9, },
    { "type": "Eyes", "name": "M1 Bloodshot", "occurrence": 7, },
    { "type": "Eyes", "name": "M1 Black", "occurrence": 9, },
    { "type": "Eyes", "name": "M1 Bunny Ears", "occurrence": 1, }
]
// myobj1[myArr[i].type] = []+

// y devuelva un objeto asi:
let obj1 = {
    Eyes: [
        { name: "M1 Bloodshot", occurrence: 7, },
        { name: "M1 Black", occurrence: 9, },
        { name: "M1 Bunny Ears", occurrence: 1, },
    ],
    Background: [
        { name: "M1 Army Green", occurrence: 9 }
    ]
};
// creo un objecto vacio donde almacenar los datos del array
let object1 = {}
// creo una funcion que devuelva un objeto por cada "type" y que dentro contenga un array de objetos
//  con las keys "name" y "ocurrence" de todos los que sean del mismo "type"
function arrayToObject(myArr1) {
// creo un loop para recorrer todo el array
    for(let i = 0; i<myArr1.length; i++) {
// creo la variable customKey para almacenar el valor correspondiente de "type" en cada iteracion
      let customKey  = myArr1[i].type;
// valido si el objeto "object1" ya contiene esa key
        if (object1.hasOwnProperty(customKey) === false) {
// si es falso, crea nueva key con un array vacio
            object1[customKey]=[];
// dentro del  array ingresan los valores y keys de "name" y "ocurrence"
            object1[customKey].push({name:myArr1[i].name,occurrence: myArr1[i].occurrence}) 
// en caso de que el objecto "object1" ya contenia esa key, ingresan los valores y keys de "name" y "ocurrence" dentro del array
        } else {
            object1[customKey].push({name:myArr1[i].name,occurrence: myArr1[i].occurrence})
        }
    }
// devuelve el objeto.
return object1      
}

console.log(arrayToObject(myArr));

