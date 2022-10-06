console.log ("---1.----Fill. Write a function that creates a new array with given values---")

/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/
const data = 3;
const valueToFill = 'a';

const fill = (arraySize, value) => {
    let newFill = [];
    for(let i = 0; i < arraySize; i++) {
        newFill.push(value);
    }
    return newFill
}

console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

console.log ("---2.-Reverse.-Write a function that reverts the input array. Please, do not use array.reverse(); to make this task more enjoyable.")

// /** asDASDASDASDSAAAAS
//   * Task description: Write a method that reverts input array 
//   * Expected Result: [1, 2, 3] => [3, 2, 1] 
//   * Task Complexity: 1 of 5 
//   * @param {Array} array - Array of any elements 
//   * @returns {Array} 
// */
const data2 = [1, 2, 3];
function reverse(array) {
    let myNewArray = []
for (let i = array.length - 1 ; i >= 0; i--){
    myNewArray.push(array[i])
}
return myNewArray
}

console.log(reverse(data2)); // [3, 2, 1]

console.log("-----3. Compact. Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null----");

/** 
  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - An array of any elements 
  * @returns {Array} 
*/
const data3 = [0, 1, false, 2, undefined, '', 3, null];
function compact (array) {
    let newArray = [];
    array.forEach(elementS => {      
            if(typeof elementS === "string" && elementS.length >1) {
                newArray.push(elementS)
            }
            if(typeof elementS === "number" && elementS > 0) {
                newArray.push(elementS)
            }
    });
return newArray
}

console.log(compact(data3)) // [1, 2, 3]
