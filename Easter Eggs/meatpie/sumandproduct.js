const prompt = require("prompt-sync") ();

let numOne = Number(prompt("Enter First Number: "));

let numTwo = Number(prompt("Enter second Number: "));

let sum = numOne + numTwo;

let multiply = numOne * numTwo;

console.log("The sum is: ", sum, "The Product is: ", multiply)
