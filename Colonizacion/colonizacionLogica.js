


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




let naranja = {
    pesoAproxEnGramos : 250,
    especie : "Ombligo",
    region : "San Pedro" 
}

let cajonDeNaranjas = [naranja,naranja,naranja,naranja]

let cama = {
    largoEnMetros: 2,
    anchoEnMetros: 1.40,
    alturaEnCm: 45
}

let mesitaDeLuz = {
    largoEnMetros : 0.5,
    anchoEnMetros : 0.5,
    alturaEnCm : 50
}

let cajonera = {
    largoEnMetros : 0.6,
    anchoEnMetros : 1,
    alturaEnCm : 120,
    cantidadDeCajones : 4,
}

cajonera.TotalMtsCuadrados = cajonera.largoEnMetros * cajonera.anchoEnMetros;

console.log ("proof",cajonera.TotalMtsCuadrados, cajonera)

let mueble = {
    largoEnMetros : 0.4,
    anchoEnMetros : 1,
    alturaEnCm: 190
}

let cuarto =[
    cama,
    mesitaDeLuz,
    cajonera,
    mueble,
]



// function emptySpace () {
//     let roomTotalSpace = 
// }


















