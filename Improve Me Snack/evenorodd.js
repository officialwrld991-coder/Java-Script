const prompt = require("prompt-sync") ();

let input = Number(prompt("Enter Number: "));

if (input % 2 == 0) {
console.log("Your Number is Even");
}

else {
console.log("Your Number is Odd");
}



