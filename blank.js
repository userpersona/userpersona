
let a = [
  'v1', 
  'v2'
]
let b = {
    0: 'e1', 
    r: 'e3',
    'r': 'e4',
    1: 'e2',
    '1': 'e5',

}

a[0]

b[0] // 'e1' 
Object.keys(b) // ['0', '1', 'r']
b['r'] // 'e4'

1 === '1' // false

Object.keys(a) // error

'asdasd'

for (k of b) {
    k
}

'1' + '2' === '12'
parseInt('1') // 1


function moveCardFromTableDeckToTableDeck() {
  if (moveCardFromDeckToDeck(tableDeck7, tableDeck1)){
  revealCard(getLastCard(tableDeck7));}
}

moveCardFromDeckRevealToTableDeck(tableDeck5);
moveCardFromDeckRevealToTableDeck(tableDeck2);
moveCardsToTableDeck(tableDeck7, tableDeck1);
moveCardFromDeckToDeckReveal();
moveCardFromDeckToDeckReveal();
moveCardFromDeckRevealToTableDeck(tableDeck3);
moveCardsToTableDeck(tableDeck6, tableDeck3);
moveCardFromDeckRevealToTableDeck(tableDeck6);