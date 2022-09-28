
const utils = require('./utils.js');
// import utils from './utils.js';


let greetings = "hola's"; // string

let age = 29; // number

let birthday = new Date(1992, 6, 18); // date

let knows_css = true; // bool

// default value

let new_var = null;

// operations

console.log(greetings);

let name = "User";

greetings = greetings + ' ' + name;

console.log(greetings); // "hola User"

let a = String(23); // '23'

// execution control

if (age > 20) {
    console.log("older");    
} else {
    console.log("younger");
}

// functions

function say_hello(name, lastname) {
    let r = "hello " + name + " " + lastname;
    return r;
}

console.log(say_hello(name, "nuske"));

// arrays y objetos

let tmp = ["a", "b", "daniel", name];

console.log(tmp.length) // 4

console.log(tmp[3]) // User

for (let i = 0; i < tmp.length; i++) {
    console.log(tmp[i])
}

try {
    pepe();
} catch (e) {
    // executes this
    console.log("thrown an error!")
}


eval("let a='asd'; console.log(a); ")

// objetos

let person = {
    name: "daniel",
    lastname: "nuske",
    ages: [37, 40, 55]
}

console.log(person.name + " has " + person.ages[0] + " years")


/*
EVERYTHING YOU NEED TO KNOW TO SURVIVE IN JS:

// variables
let
const
delete

// assorted values
true
false 
void
null
undefined

// execution control
if
else

// iteration
for

// functions
function 
return

// data access (you'll see this later)
instanceof
this
typeof

// modules
default
export
import

// ADDITIONAL: data types
string, Number, boolean, Date, array, object

// EXTRAS (everything that is on the email that we deleted here):

class
extends
super
new
...

*/