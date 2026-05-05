const prompt = require("prompt-sync") ();

let numOne = Number(prompt("Enter First Number: "));

let numTwo = Number(prompt("Enter second Number: "));


let temp = numOne;

numOne = numTwo;

numTwo = temp;

console.log(numOne, " ", numTwo);
