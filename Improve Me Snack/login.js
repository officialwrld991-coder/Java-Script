function login (username, password) {

if (username <= 8 && password <= 8) {
return "Invalid Input";
}
else {
return "Valid Login";
}

}

console.log(login("off", "off"));


