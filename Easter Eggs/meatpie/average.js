const prompt = require("prompt-sync") ();

let inputOne = Number(prompt("Enter First Number: "));

let inputTwo = Number(prompt("Enter second Number: "));

let inputThree = Number(prompt("Enter third Number: "));

let average = (inputOne  + inputTwo + inputThree) / 3;

console.log(average);
