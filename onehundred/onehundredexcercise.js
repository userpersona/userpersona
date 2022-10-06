// 1.
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];

// What is the length of the array? 
console.log(myAlphabet.length);
console.log("1----------------------------------------------------------------------------")
// Write a function called myAlphabetLength which console.logs the length of the array
// Within the function also use an if-conditional statement that checks if the number of items within the array are less than 4
function myAlphabetLength() {
    if (myAlphabet.length>4) {
        console.log("the number of items within the array are more than 4 actually the lenght is " + myAlphabet.length)     
    } else return
}

myAlphabetLength();
console.log("2----------------------------------------------------------------------------")
// 2.
var dnuske = "Daniel";
var saludar = "";
var isInARelationship = false;
var relationshipTime = undefined;
// Declare a function checkFunc that takes a string and a boolean as parameters
function checkFunc (_nombre, _enPareja) {
    saludar = "Buenos dias mr. " + _nombre;
    console.log(saludar)
    if (_enPareja === false) { 
        console.log( "Time to go party! ")
    }
}
// Call the function using 2 arguments
checkFunc(dnuske,isInARelationship)
console.log("3----------------------------------------------------------------------------")
// 3.
// Declare and initialize an array called Planets with 5 string values
let Planets = ["earth","jupiter","pluton","marth","neptune"]
// console.log each item in the array
function consolePlanets () {
        for (let i = 0; i < Planets.length; i ++) {
// Also console.log the index in each iteration
            console.log(Planets[i] + ",the index is " + [i] )
        }
    }
consolePlanets()
console.log("4----------------------------------------------------------------------------")
// 4.
// Declare and initialize an array called
// wowDatatypes
// The array must have 5 different data types (NOT objects)
let wowDatatypes = [18, "Peter", relationshipTime, isInARelationship, 14.1];
console.log (wowDatatypes)
// Iterate over the array and console.log each item in the array + it’s index and data type in the array
function consoleIndexAndDataType () {
    for(let i = 0; i<wowDatatypes.length ; i ++) {
        console.log (wowDatatypes[i] + ",the index is " + [i] + ",the type of data is " + typeof wowDatatypes[i])
    }
}
consoleIndexAndDataType()
console.log("5----------------------------------------------------------------------------")
// 5.
// console.log each item in this array WITHOUT using a for loop
    myArr = [ 1, 2, 'One', true];
function consoleMyArr() {
    let i = 0;
    while (i < myArr.length) { 
    console.log(myArr[i])
    i++;
    }
}
consoleMyArr()
console.log("6----------------------------------------------------------------------------")
// 6.
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
function sameCourses () {
    for ( let i = 0; i < student2Courses.length; i++) {
        if (student1Courses[i] === student2Courses[i]) {
            console.log("the common course is " + student1Courses[i])
        }
    }
}
sameCourses()
console.log("7----------------------------------------------------------------------------")
// Loop over the 2 arrays and if there are any common courses, if so console.log them
// 7.
let food = ['Noodle', 'Pasta', 'Ice-cream'];
let food1 = ['Fries', 'Ice-cream', 'Pizza'];
// compare the 2 arrays and find common food if any
// function sameFoods () {
//     for (let i = 0; i < food.length; i++) {
//         for (let j = 0; j < food1.length; j++) {
//             if(food[i] === food1[j]){
//                 console.log("the common food is " + food [i])
//             }
//         }
//     }
// };
function equalFoodFilter() {
    food.forEach( dish1 => {
        food1.filter(dish2 => {
            if (dish1 === dish2) {
                console.log("the common food is "+ dish1)
            }
        })
        
    });

}
equalFoodFilter() 
console.log("8----------------------------------------------------------------------------")
// 8.
let values1= ['Apple', 1, false];
let values2 = ['Fries', 2 ,true];
let values3 = ['Mars', 9, 'Apple'];
// compare the 3 arrays and find any common elements
function sameValues () {
    let result = [];
    values1.forEach(firstValue => {
        values2.forEach(secondValue => {
            if(firstValue === secondValue) {
                result = firstValue;
            } else {
                values3.forEach(thirdValue => {
                    if(firstValue === thirdValue) {
                        result = thirdValue;
                    }
                })
            }
        })
    })
    console.log(result)
}
sameValues()
console.log("9----------------------------------------------------------------------------")
// 9.
let furniture = ['Table', 'Chairs','Couch'];
// For each item in this array console.log the letters in each item
function leterByLeter () {
    let eachLetter = ""
    furniture.forEach(function(letters) { 
        for (let q = 0; q<= letters.length; q ++){
            console.log(letters.charAt(q))
        }    
        
    })
}

leterByLeter();
console.log("------------FINISH-LINE------------------------------------------------------")