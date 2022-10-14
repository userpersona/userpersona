// You are given a large integer represented as an integer array digits,
//  where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order.
//  The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4];  

function plusOne(digits) {
let x = 0;
let currentItem = digits[digits.length -1 - x];
for(x = 0; currentItem === 9 ; x ++) {
    if(currentItem === 9) {
        digits[digits.length -1 -x ] = 0;
        currentItem = digits[digits.length -1 - x-1];
    }        
} 
if(currentItem === undefined) {
    digits.unshift(1);
}      
if (currentItem!== 9 && currentItem !== undefined) {
    digits[digits.length -1 - x] += 1;
}    
                  
return digits
}
console.log(plusOne(digits))

console.log("------------------------------------------------------------------------------------------");
// function QuestionsMarks(str) { 
//     if ( /^[A-Za-z0-9-?-]*$/.test(str) === true) {
    
//       for(let i = 0; i<str.length; i++) {
//         for(let h = i +1; h <str.length; h++){
//           if (Number(str[i]) + Number(str[h]) === 10 ) {
//             if (str.slice(i,h).split("?").length ===3) {
            
//             }
            
//           } 
//           }
//         }
//         return true
//       }
    
    //   }
    
//       // code goes here
    
console.log("--------------------------------------------------------------------");
       
//     // keep this function call here 
//     console.log(QuestionsMarks("asd91??1?"));

// function FirstFactorial(num) { 
//     var num1 = num.toString();
//     var num2 = num1.split();
//     for (let i = 0; i <num.length; i++) {
//         num2[i] =     
//      }
//       // code goes here  
//       return num2; 
    
//     }
// console.log(FirstFactorial(4321));
