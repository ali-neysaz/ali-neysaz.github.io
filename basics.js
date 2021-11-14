// console.log("Hello guys!");
// alert("Hi!");





// variables

//var b = "sheeeeeeeeeeish";
//console.log(b)
//var SomeNumber = 1234566789909876543
//console.log(SomeNumber)





// change the HTML code


// document.getElementById("1").innerHTML = "Hello guys"





// ask for sth (in this case, the age will be typed in the web browser)



//var age = prompt("what is your age?");
//document.getElementById("1").innerHTML = age;












// Numbers in js

// adding sth to num1 
 var num1 = 10;
// num1 = num1 + 1;
// console.log(num1);





// decreasing sth from num1

// num1 = num1 - 1;
// console.log(num1);






// we canalso devide, multyply*, and even find the remainder.

//console.log(num1 % 3);           the remainder


// console.log(num1 * 2);          multiplying


//console.log(num1 / 2);            dividing










// fancy way to increase and deacrease a number:


// num1 += 20
// console.log(num1);


// num1 -= 5
// console.log(num1);










//functions :)



/* how to make a function
function fun() {
    console.log("this is working");
}


//call 
fun();

*/


// now we will make it more complicated :

function greeting() {
    var TheName = prompt ("what is your name?");
    var result = "hello " + TheName;
    document.getElementById(1).innerHTML = result;
}


//greeting();





// how do arguments work in functons?
// how to add two numbers in a function?

function HelloGuys(num1, num2) {
    var TheFinalResult = num1 + num2
    console.log(TheFinalResult);
}


// HelloGuys(10 , 20);












/* while loops (not recommended)

var asd = 0;
while (asd < 10) {
    asd += 1;
    console.log(asd);
}



*/


/* for loop(recommended)

for(let qwerty = 0; qwerty < 10; qwerty++) {
console.log(qwerty);
}
*/


// Data types

let YourName = "Ali";             // A string
let yourAge = 14;                 // A number
let TheFirstAndTheLastName = { first: 'Ali', last: "neysaz" };        // An object
let truth = false;                // A boolean
let ProgrammingLanguages = ["HTML", "python", "java", "javascript"];  // An array
let random;                       // Undefined
let nothing = null;               // Null








// Strings in javascript

let fruits = "Apple";
let MoreFruits = "apple/nBanana";
console.log(MoreFruits);                                      // Backslash?????


console.log(fruits.length);
console.log(fruits.indexOf('ppl'));