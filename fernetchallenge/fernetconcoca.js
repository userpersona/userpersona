// console.log("mandinga thing");

// const coca = "coca";
// const fernet = "fernet";
// const agua = "agua";

// // tengo 2 botellas de coca de 2l - 67.63 oz
// let cocacolaEmptyBottle = { volumen: 2000, bebida: coca, remainingCapacity: 0};
// // 1
// let cocacolaFullBottle = { volumen: 2000, bebida: coca ,remainingCapacity: 0};

// let fernetBottle = { volumen: 750, bebida: fernet, remainingCapacity: 0 };

// // const cubo = {volumen: 750, bebida: "agua", estado: "solido"};
// let cubo = { volumen: 20 , bebida: agua };

// let cubitos = [cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo, cubo];

// // let cubosDeHielo = [cubo, cubo, cubo, cubo, cubo];

// // define functions
// //function that add capacity when volumen decrese and upside down


// function changeCapacity (volumen,_bottle) { 
//     if (_bottle.volumen > 0 ) {
//         _bottle.remainingCapacity +=  volumen;
//         _bottle.volumen -= _bottle.remainingCapacity;
//     }
// }

// COMO SERIA EL OBJETO FINAL (TRAGO) : objeto volumen

// arrayfernet =  [{bebida : coca, estado: liquido, volumen : 2000,}, {bebida:fernet,estado: liquido, volumen:1000 }, {bebida: cubitos,estado: solido, volumen: 200}, {bebida: espuma, estado: liquido, volumen: 20}];



// //agregar cubitos
// // function agregarUnCubo(_bottle) {

// //     if (cubitos.length >= 1) {
    
// //     }
// // }

// // agregarUnCubo(cocacolaEmptyBottle);
// // console.log('====-======-========-=========-========', cocacolaEmptyBottle, cubitos)
// // function agregarCubitos(_cantidad, _bottle) {
// //     let _cantidad = '';
// //     for (let i = 0; i>30 ; i ++) {
   
// //     }
// // }
 

// //vaciar botella
// function emptyWholeBottle(_bottle) {
//     if (_bottle.remainingCapacity === 0) {
//         _bottle.remainingCapacity = _bottle.volumen;
//         _bottle.volumen = 0;
//     }
// }




// // agregarCubitos(5, cocacolaEmptyBottle)

// emptyWholeBottle(cocacolaEmptyBottle);
// addDrink(fernetBottle,180 ,cocacolaEmptyBottle);
// addDrink(cocacolaFullBottle, 1000, cocacolaEmptyBottle);
// console.log(fernetBottle,cocacolaEmptyBottle,cocacolaFullBottle)

// //agregar fernet

// // function agregarFernet(volumen) {
// //     if (cocacola.capacity > 0) {
// //     agregarBebida(cocaCola, 30)
// //   }
// // }

// // agregar coca

// function agregarCoca() {}


// // aquí descansa el profesor dnuske: []




//COMO SERIA EL OBJETO FINAL (TRAGO) : objeto volumen, bebida
const coca = "coca";
const fernet = "fernet";
const agua = "agua";
const espuma = "espuma";

const estados = {
  solido: "solido",
  liquido: "liquido",
  gaseoso: "gaseoso"
}


let cubito = {
  bebida: agua,
  estado: estados.solido,
  volumen: 20
};

let cocaColaBottle = [{
    bebida: coca,
    estado: estados.liquido,
    volumen: 2000
}]

let fernetBottle = [{
    bebida: fernet,
    estado: estados.liquido,
    volumen: 750
}]


let jarra = [];


// construir una función que te devuelva el siguiente valor fernet.
let arrayFernetV1 = [
  {
    bebida: coca, 
    estado: estados.liquido, 
    volumen: 1200
  }, 
  {
    bebida: fernet,
    estado: estados.liquido, 
    volumen: 500
  },
  cubito,
  cubito,
  cubito
];

// construir una funcion que reciba de parametro un fernet con coca, y te devuelva qué porcentaje de fernet tiene



// este arrayFernetV1 tiene q complir con la regla que tenga el 30% de fernet respecto de la coca
let arrayFernetV2 = [
  {
    bebida: coca, 
    estado: estados.liquido, 
    volumen: 1200
  }, 
  {
    bebida: fernet,
    estado: estados.liquido, 
    volumen: 500
  },
  cubito,
  cubito,
  cubito,
  {
    bebida: espuma,
    estado: estados.gaseoso,
    volumen: 20
  }
];
// addFernet(100);

// agregar volumen de fernet deseado en la jarra
// function addFernet(volumen){
  // fernetBottle[0].volumen -= volumen;
  // if (jarra.volumenDeFernet != undefined) {
  //   jarra.volumenDeFernet += volumen;
  // }
  // if (jarra.volumenDeFernet === undefined) {
  //   jarra.volumenDeFernet = volumen ; 
  // }
  //   jarra.estado = estados.liquido;
  // if (jarra.bebida!= undefined) {
  //   jarra.bebida += ', ', fernetBottle[0].bebida;
  // } 
  // if (jarra.bebida === undefined) {
  //   jarra.bebida = fernetBottle[0].bebida;
  // }
function addFernet(volumen){
  var fernetObject = {};

  if (fernetObject["Volumen"] != undefined){
    fernetObject["Volumen"] += volumen
  }  
  if (fernetObject["Volumen"] === undefined){   
  fernetObject["Volumen"] = volumen
  }
  
  fernetObject["Bebida"]= fernetBottle[0].bebida,
  fernetObject["Estado"]= fernetBottle[0].estado
  jarra.push(fernetObject);
  fernetBottle[0].volumen -= volumen;
}

addFernet(200);



function addCocacola (volumen){
  var cocaColaObject = {};
  
  if (cocaColaObject["Volumen"]!= undefined) {
    cocaColaObject["Volumen"] +=volumen
  }
  if (cocaColaObject["Volumen"]=== undefined) {
    cocaColaObject["Volumen"] = volumen
  }
  cocaColaObject["Bebida"]= cocaColaBottle[0].bebida,
  cocaColaObject["Estado"]= cocaColaBottle[0].estado
  jarra.push(cocaColaObject);
  cocaColaBottle[0].volumen -= volumen;
}

addCocacola(1200);

function addIce(_cantidad){
  var cubitosObject = {};
    cubitosObject["Cantidad de cubitos"] =_cantidad
    if (cubitosObject["Volumen"]!= undefined){
    cubitosObject["Volumen"]+= cubito.volumen * cubitosObject["Cantidad de cubitos"];
    }
    if(cubitosObject["Volumen"] === undefined){
    cubitosObject["Volumen"] = cubito.volumen * cubitosObject["Cantidad de cubitos"];
    }
    cubitosObject["Bebida"] = cubito.bebida
    cubitosObject["Estado"] = cubito.estado

 jarra.push(cubitosObject)  

}
addIce(5)
console.log(jarra)
// agregar coca cola en la jarra y que modifique los volumenes apropiadamente, y agrege la bebida a las ya incorporadas
// function addCocacola (volumen){
//     cocaColaBottle[0].volumen -= volumen;
//     if (jarra.volumenDeCoca === undefined) {
//     jarra.volumenDeCoca += volumen ;
//     }
//     jarra.bebida +=   ', ' + cocaColaBottle[0].bebida 
//     jarra.estado = estados.liquido;
// }
// funcion que agregue  cubitos de hielo, modifique el volumen de la jarra , la bebida
// function addIce (_cantidad) {
  
//   for (let i = 1; i<=_cantidad ; i ++) {
   
//     if(jarra.volumen === undefined) {
//     jarra.volumen = volumen
//    }
//   }
// };
// addIce(5);
// addCocacola(800);
// addFernet(100);

// console.log(jarra, cocaColaBottle,fernetBottle);


