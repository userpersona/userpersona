//clubs (♣), diamonds (♦), hearts (♥) and spades (♠)//

var types = {
    clubs : "clubs",
    spades : "spades",
    hearts : "hearts",
    diamonds : "diamonds"
}
var numbers = {
    "A": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
}
var colors = {
    red : "red",
    black : "black",
}


function getLastCard(_stackOfCards) {
   
    return _stackOfCards[_stackOfCards.length -1];
}


function getFirstCard (_arrayFrom) {
    return _arrayFrom[0]
}
// create a function that returns a card object and recieves 4 parameters: color, type, number and visible//
function createCard (color, type, number, visible=false) {
    return {
        'color': color, 
        'num': number, 
        'type': type,
        'visible' : visible,
    }
}
createCard(colors.black, types.clubs,numbers[10], true)
function createDeck () {    

    var deck = [];

    for (let i = 0; i < Object.keys(types).length; i=i+1) {
        // console.log('proof', i, Object.keys(types)[i])
        var currentType = Object.keys(types)[i]

        var currentColor;

    

        switch (currentType) {
                case types.spades :
                    currentColor = colors.black;
                break;
                case types.clubs :
                    currentColor = colors.black;
                break;
                case types.hearts :
                    currentColor = colors.red;
                break;
                case types.diamonds :
                    currentColor = colors.red;
                break;
        }

        // hace un array que tenga todos los valores de numbers 
        var numberValues = Object.values(numbers);
        numberValues.sort((a,b) => a-b)
        
        //ordenar ese array

        
        for (let currentNumIndex = 0; currentNumIndex< numberValues.length; currentNumIndex++) {
            var currentNum = numberValues[currentNumIndex]
            
            var currentCard = createCard(currentColor, currentType, currentNum);
        
            deck.push(currentCard)
            
        }
    }

    return deck ;

    
}

// can i move to tabledeck?? it must return true or false if destination can acept the card

function canIMoveToTableDeck(_card, _tableDeck) {
    // validate si es el siguiente valor inferior
    // validar que sea de distinto color
    if (_tableDeck.length === 0 && _card.num === 13) {
        return true
    }



    var _tableDeckLastCard = getLastCard(_tableDeck)
    // conseguir los numeros de las cartas
    // sumarle uno a la carta que va a sumarse al tableDeck

    if (_tableDeckLastCard.num === _card.num + 1 && _tableDeckLastCard.color != _card.color) {
        return true
    }  
    

}

function moveCardsToTableDeck (_deckFrom, _tableDeck) {
    _card = getLastCard(_deckFrom) 

    if (canIMoveToTableDeck(_card, _tableDeck)) {
        moveCardFromDeckToDeck(_deckFrom, _tableDeck)
    }
var leftCardsIn_deckFrom = _deckFrom.length > 0;
    if ( leftCardsIn_deckFrom && getLastCard(_deckFrom).visible === false ) {
        revealCard(getLastCard(_deckFrom))
    }

}



function moveCardsFromTableDeckToTableDeck(_arrayFrom, _tableDeckTo, count) {
    let _firstCardOfTheArray = getFirstCard(_arrayFrom.slice(-count))
    if (canIMoveToTableDeck (_firstCardOfTheArray, _tableDeckTo)) {
        moveSeveralCards(_arrayFrom, _tableDeckTo, count)
    }
  
    var quedoArray = _arrayFrom.length > 0;
    var cartaNoEstaVisible = getLastCard(_arrayFrom).visible === false;
    if (quedoArray && cartaNoEstaVisible) {
        revealCard(getLastCard(_arrayFrom))
    }
}


//como hago una funcion que me deje mover una carta si se cumple la funcion canImoveToTableDeck
// function that moves card if canIMoveToTableDeck



let deck = createDeck()  

// define array for deck reveal
let deckReveal = [];    

// define arrays for table decks
var tableDeck1 = [] ;
var tableDeck2 = [] ;
var tableDeck3 = [] ;
var tableDeck4 = [] ;
var tableDeck5 = [] ;
var tableDeck6 = [] ;
var tableDeck7 = [] ;

// define arrays for destination
let destinationClubs = [];
let destinationDiamonds = [];
let destinationHearts = [];
let destinationSpades = [];




function moveCardFromDeckToDeck(_deckFrom, _deckTo) {
    if (_deckFrom.length >= 1 ) {
        _deckTo.push(_deckFrom.pop())
    }
}

// moveCardFromDeckToDeck(deck, tableDeck3)

// console.log( 'proof3', deck.length, tableDeck3)

function revealCard(_card) { 
    _card.visible = true;
}

function hideCard(_card) {
    _card.visible = false;
}
// function to reveal automaticly the last card of a deck



// we are going to store if a card is visible in the card object but only on table deck arrays

// function to move one card from deck to a table deck during game initialization

function moveCardFromDeckToTableDeck(_tableDeck) {
    moveCardFromDeckToDeck(deck, _tableDeck)
}



// moveCardFromDeckToTableDeck(tableDeck1)
// console.log ('asd', deck.length, tableDeck1); 

// function to move a card from deck to deck reveal
function moveCardFromDeckToDeckReveal () {
    moveCardFromDeckToDeck(deck, deckReveal);
    revealCard(deckReveal[deckReveal.length - 1]);
}




// var a = []
// a[0] = 'a'
// a[1] = 'b'
// a.length
// a.push('c') // a[a.length] = 'c'
// a[2] // 'c'
// var pepe = a[a.length - 1]

// moveCardFromDeckToDeckReveal()

// console.log( 'proof2', deck.length, deckReveal )

// function to move all cards from deck reveal to deck
function moveAllCardsFromDeckRevealToDeck(){
    if (deck.length === 0){ 
        deck = deckReveal.slice(0,deckReveal.length)
        deckReveal = []
    }
}

//moveAllCardsFromDeckRevealToDeck()

// console.log('proof4', deck.length, deckReveal.length)

// function to initialize the game
function initialize () {
    // move one card from deck to tableDeck1
    moveCardFromDeckToTableDeck(tableDeck1)
    revealCard(getLastCard(tableDeck1))
    // move two cards from deck to tableDeck2
    for (let i = 0; i < 2; i++){
        moveCardFromDeckToTableDeck(tableDeck2)
    }
    revealCard(getLastCard(tableDeck2))
    // move three cards from deck to tableDeck3
    for (let i = 0; i < 3; i++){
        moveCardFromDeckToTableDeck(tableDeck3)
    }
    revealCard(getLastCard(tableDeck3))
    // move four cards from deck to tableDeck4
    for (let i = 0; i < 4; i++){
        moveCardFromDeckToTableDeck(tableDeck4)
    }
    revealCard(getLastCard(tableDeck4))
    // move five cards from deck to tableDeck5
    for (let i = 0; i < 5; i++){
        moveCardFromDeckToTableDeck(tableDeck5)
    }
    revealCard(getLastCard(tableDeck5))
    // move six cards from deck to tableDeck6
    for (let i = 0; i < 6; i++){
        moveCardFromDeckToTableDeck(tableDeck6)
    }
    revealCard(getLastCard(tableDeck6))
    // move seven cards from deck to tableDeck7
    for (let i = 0; i < 7; i++){
        moveCardFromDeckToTableDeck(tableDeck7)
    }
    revealCard(getLastCard(tableDeck7))
    // move one card from deck to deckReveal
    moveCardFromDeckToDeckReveal()
    
    // reveal the last card of each tableDeck

 
    

}
initialize()


// revealCard(tableDeck1[0])



// console.log('proof5', deck.length, deckReveal, tableDeck1.length, tableDeck2,tableDeck3.length, tableDeck4.length,tableDeck5.length,tableDeck6.length,tableDeck7)


// function to move card from deck reveal to table deck
function moveCardFromDeckRevealToTableDeck(_tableDeckTo) {
    moveCardFromDeckToDeck(deckReveal, _tableDeckTo);
    if (deckReveal.length === 0) {
        moveCardFromDeckToDeckReveal();
    }  
}

// function moveCardFromDeckRevealToTableDeckAndPopulateDeckReveal(_tableDeckTo) {
//     // mover card de dreveeal a tdeck
//     moveCardFromDeckRevealToTableDeck(_tableDeckTo)
//     // verificar si el deck reveal queda vacio
//     if (deckReveal.length === 0) { 
//         // mover carta de deck a deck reveal
//         moveCardFromDeckToDeck(deck, deckReveal)
//     }   
// }





// function to move a card from table deck to destination deck


function moveCardFromTableDeckToDestinationDeck (_tableDeckFrom) {
    // can it be moved?
   
    var _card = getLastCard(_tableDeckFrom);
    

    // {
    //   type,
        // number,
        // color,
        // visible    
    // }
    

    if (_card['visible'] === false ) {
        return;
    }
    // move to destination if tableDeckFrom is
    // work with the same type that the card has
    var toDestination ;
    if (_card.type == types.diamonds ) {
        toDestination = destinationDiamonds;
    }
    if ( _tableDeckFrom.length > 0 && getLastCard(_tableDeckFrom).visible === false ) {
        revealCard(getLastCard(_tableDeckFrom))
    }
    if (_card.type == types.spades ) {
        toDestination = destinationSpades;
    }
    if ( _tableDeckFrom.length > 0 && getLastCard(_tableDeckFrom).visible === false ) {
        revealCard(getLastCard(_tableDeckFrom))
    }
    if (_card.type == types.hearts ) {
        toDestination = destinationHearts;
    }
    if ( _tableDeckFrom.length > 0 && getLastCard(_tableDeckFrom).visible === false ) {
        revealCard(getLastCard(_tableDeckFrom))
    }
    if (_card.type == types.clubs ) {
        toDestination = destinationClubs;
    }
    if ( _tableDeckFrom.length > 0 && getLastCard(_tableDeckFrom).visible === false ) {
        revealCard(getLastCard(_tableDeckFrom))
    }

    // if destination is empty and tableDeckFrom is "A"
   
     
    if (toDestination.length === 0 && _card.num == numbers['A']){
        
        moveCardFromDeckToDeck(_tableDeckFrom, toDestination);
        if ( _tableDeckFrom.length > 0 && getLastCard(_tableDeckFrom).visible === false ) {
            revealCard(getLastCard(_tableDeckFrom))
        }
        return;
    }
  
    
    // if destination isnt empty and the last card in tableDeckFrom is the next card in destination sequence 
    if (toDestination.length > 0) {
        var _destinationLastCard = getLastCard(toDestination);
        if (_destinationLastCard.num  === _card.num - 1){
            moveCardFromDeckToDeck(_tableDeckFrom, toDestination);
            if ( _tableDeckFrom.length > 0 && getLastCard(_tableDeckFrom).visible === false ) {
                revealCard(getLastCard(_tableDeckFrom))
            }
            return;
        }
    }


    
    
   

}


function moveSeveralCards(arrayFrom, arrayTo, count) {
    // grab 'count' elements from the end of arrayFrom
    // let v1 = arrayFrom.slice(arrayFrom.length - count); // [4,5,6,7,8]
    
    // delete count elements from arrayFrom
    // arrayFrom.splice(arrayFrom.length - count)
    
    
    let v2 = arrayFrom.splice(arrayFrom.length - count);
    // insert such elements into the end of arrayTo
    for ( let x = 0; x < v2.length; x ++){
        arrayTo.push(v2[x]);
    }

   
}


// var tableDeck100 = [];
// var tableDeck101 = [];
// var tableDeck102 = [];
// tableDeck100.push(createCard(colors.black, types.clubs,numbers[10],visible=true))
// tableDeck100.push(createCard(colors.black, types.clubs,numbers[10],visible=true))
// tableDeck100.push(createCard(colors.red, types.hearts,numbers[9],visible=true))
// tableDeck100.push(createCard(colors.black,types.clubs,numbers[8],visible=true))


// tableDeck101.push(createCard(colors.red,types.hearts,numbers.J))

// tableDeck102.push(createCard(colors.red, types.diamonds,numbers[9]))
// console.log('====================================', tableDeck100, tableDeck101)
// //moveCardsFromTableDeckToTableDeck(tableDeck100,tableDeck101,3)
// console.log('====================================', tableDeck100, tableDeck101)

// moveCardsFromTableDeckToTableDeck(tableDeck100,tableDeck101,3)

// console.log(tableDeck100,'====================',tableDeck101,'==================' ,tableDeck102)


moveCardsToTableDeck(tableDeck7, tableDeck1);
moveCardsToTableDeck(tableDeck2, tableDeck1);
moveCardsToTableDeck(tableDeck2, tableDeck7);
moveCardsFromTableDeckToTableDeck(tableDeck7, tableDeck2,2);
moveCardFromTableDeckToDestinationDeck(tableDeck7);
moveCardFromTableDeckToDestinationDeck(tableDeck7);
moveCardFromTableDeckToDestinationDeck(tableDeck7);
moveCardFromTableDeckToDestinationDeck(tableDeck7);
moveCardFromTableDeckToDestinationDeck(tableDeck7);
moveCardFromTableDeckToDestinationDeck(tableDeck6);
moveCardFromTableDeckToDestinationDeck(tableDeck6);
moveCardFromTableDeckToDestinationDeck(tableDeck6);
moveCardFromTableDeckToDestinationDeck(tableDeck6);
moveCardFromTableDeckToDestinationDeck(tableDeck6);
moveCardFromTableDeckToDestinationDeck(tableDeck6);
moveCardFromTableDeckToDestinationDeck(tableDeck5);
moveCardFromTableDeckToDestinationDeck(tableDeck5);
moveCardFromTableDeckToDestinationDeck(tableDeck5);
moveCardFromTableDeckToDestinationDeck(tableDeck5);
moveCardFromTableDeckToDestinationDeck(tableDeck5);
moveCardFromTableDeckToDestinationDeck(tableDeck4);
moveCardFromTableDeckToDestinationDeck(tableDeck4);
moveCardFromTableDeckToDestinationDeck(tableDeck4);
moveCardFromTableDeckToDestinationDeck(tableDeck4);
moveCardFromTableDeckToDestinationDeck(tableDeck3);
moveCardFromTableDeckToDestinationDeck(tableDeck3);
moveCardFromTableDeckToDestinationDeck(tableDeck3);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromDeckRevealToTableDeck(tableDeck3);
moveCardFromDeckRevealToTableDeck(tableDeck4);
moveCardFromDeckRevealToTableDeck(tableDeck5);
moveCardFromDeckRevealToTableDeck(tableDeck6);
moveCardFromDeckRevealToTableDeck(tableDeck7);
moveCardFromDeckToDeck(destinationDiamonds, tableDeck2);
moveCardsToTableDeck(tableDeck3,tableDeck2);
moveCardFromDeckRevealToTableDeck(tableDeck3);
moveCardFromDeckToDeck(destinationDiamonds, tableDeck1);
moveCardsToTableDeck(tableDeck4,tableDeck1);
moveCardFromDeckRevealToTableDeck(tableDeck4);
moveCardFromDeckToDeck(destinationDiamonds, tableDeck2);
moveCardsToTableDeck(tableDeck5,tableDeck2);
moveCardFromDeckRevealToTableDeck(tableDeck5);
moveCardFromDeckToDeck(destinationDiamonds,tableDeck1);
moveCardsToTableDeck(tableDeck6,tableDeck1);
moveCardFromDeckRevealToTableDeck(tableDeck6);
moveCardFromDeckToDeck(destinationDiamonds,tableDeck2);
moveCardsToTableDeck(tableDeck7,tableDeck2);
moveCardFromDeckRevealToTableDeck(tableDeck7);
moveCardFromTableDeckToDestinationDeck(deckReveal);
moveCardFromDeckToDeckReveal();
moveCardFromTableDeckToDestinationDeck(tableDeck7);
moveCardFromTableDeckToDestinationDeck(tableDeck6);
moveCardFromTableDeckToDestinationDeck(tableDeck5);
moveCardFromTableDeckToDestinationDeck(tableDeck4);
moveCardFromTableDeckToDestinationDeck(tableDeck3);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromDeckRevealToTableDeck(tableDeck7);
moveCardFromDeckRevealToTableDeck(tableDeck1);
moveCardFromDeckRevealToTableDeck(tableDeck2);
moveCardFromDeckToDeck(destinationDiamonds,tableDeck1);
moveCardFromDeckRevealToTableDeck(tableDeck1);
moveCardFromDeckToDeck(destinationDiamonds,tableDeck2);
moveCardFromDeckRevealToTableDeck(tableDeck2);
moveCardFromDeckToDeck(destinationDiamonds,tableDeck1);
moveCardFromDeckRevealToTableDeck(tableDeck1);
moveCardFromDeckToDeck(destinationDiamonds,tableDeck2);
moveCardFromDeckRevealToTableDeck(tableDeck2);
moveCardFromDeckToDeck(destinationDiamonds,tableDeck1);
moveCardFromDeckRevealToTableDeck(tableDeck1);
moveCardFromDeckRevealToTableDeck(tableDeck3);
moveCardFromDeckRevealToTableDeck(tableDeck4);
moveCardFromDeckRevealToTableDeck(tableDeck5);
moveCardFromDeckRevealToTableDeck(tableDeck6);
moveCardFromTableDeckToDestinationDeck(deckReveal);
moveCardFromTableDeckToDestinationDeck(tableDeck6);
moveCardFromTableDeckToDestinationDeck(tableDeck5);
moveCardFromTableDeckToDestinationDeck(tableDeck4);
moveCardFromTableDeckToDestinationDeck(tableDeck3);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck2);
moveCardFromTableDeckToDestinationDeck(tableDeck1);
moveCardFromTableDeckToDestinationDeck(tableDeck7);










console.log("Deck",'\n\n\n',deck,'\n\n\n'," table deck 1", tableDeck1,'\n\n\n',"table deck 2", tableDeck2,'\n\n\n',"table deck 3", tableDeck3,'\n\n\n',
"table deck 4",tableDeck4,'\n\n\n',"table deck 5", tableDeck5,'\n\n\n',"table deck 6" ,tableDeck6,
'\n\n\n',"table deck 7" ,tableDeck7,'\n\n\n',"deck reveal", deckReveal,'\n\n\n'," d diamonds" ,destinationDiamonds,'\n\n\n',
" d spades", destinationSpades,'\n\n\n'," d clubs" ,destinationClubs,'\n\n\n',"d hearts" ,destinationHearts,'\n\n\n')




// // function to move an array of cards from table deck to table deck

// // b = {}
// // b['a'] = 'pepe'
// // b.saludo = 'hola'
// // b.saludo // 'hola'
// // b['saludo'] // 'hola'








// // console.log(' -- deck', createDeck());

