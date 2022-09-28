//clubs (♣), diamonds (♦), hearts (♥) and spades (♠)//

var types = {
    clubs : "clubs",
    spades : "spades",
    hearts : "hearts",
    diamonds : "diamonds"
}
var numbers = {
    "A" : "A",
    2 : "2",
    3 : "3",
    4 : "4",
    5 : "5",
    6 : "6",
    7 : "7",
    8 : "8",
    9 : "9",
    10 : "10",
    J : "J",
    Q : "Q",
    K : "K",
}
var colors = {
    red : "red",
    black : "black",
}

// create a function that returns a card object and recieves 3 parameters: color, type and number//
function createCard (color, type, number) {
    return {
        'color': color, 
        'num': number, 
        'type': type,
    }
}


var deck = [];

for (let i = 0; i < Object.keys(types).length; i=i+1) {
    // console.log('proof', i, Object.keys(types)[i])
    var currentType = Object.keys(types)[i]

    var currentColor;

    if (currentType === types.spades ) {
        currentColor = 'black';
    } else if (currentType === types.clubs ) {
        currentColor = 'black';
    } else if (currentType === types.diamonds ) {
        currentColor = 'red';
    } else if (currentType === types.hearts ) {
        currentColor = 'red';
    }

    for (let n = 0; n < Object.keys(numbers).length; n++){
        var currentNum = Object.keys(numbers)[n]
        // console.log("-", i, n, Object.keys(types) [i], Object.keys(numbers)[n])
        // console.log('=>', createCard(colors.black, currentType, currentNum))

        // @soyuserpersona: add a card to the deck
        deck.push( createCard(currentColor, currentType, currentNum))
        
    }
}

console.log(' -- deck', deck, deck.length)


// var carta1 = createCard(colors.black, types.spades, numbers['A']) 
// var carta2 = createCard(colors.black, types.spades, numbers[2])
// var carta3 = createCard(colors.black, types.spades, numbers[3])
// var carta4 = createCard(colors.black, types.spades, numbers[4]) 
// var carta5 = createCard(colors.black, types.spades, numbers[5])
// var carta6 = createCard(colors.black, types.spades, numbers[6])
// var carta7 = createCard(colors.black, types.spades, numbers[7]) 
// var carta8 = createCard(colors.black, types.spades, numbers[8])
// var carta9 = createCard(colors.black, types.spades, numbers[9])
// var carta10 = createCard(colors.black, types.spades, numbers[10]) 
// var carta11 = createCard(colors.black, types.spades, numbers['J'])
// var carta12 = createCard(colors.black, types.spades, numbers['Q'])
// var carta13 = createCard (colors.black, types.spades, numbers['K'])
// var carta14 = createCard(colors.red, types.clubs, numbers['A'])





// var mazo = [
//     carta1,
//     carta2,
//     carta3,
// ]




//console.log("mazo", mazo)
//console.log("card", createCard(colors.black, types.diamonds, numbers[5]));
