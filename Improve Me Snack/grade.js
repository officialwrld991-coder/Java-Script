function studentsScore (score) {

if (score >= 70) {
return "A";
}
else if (score >= 69 && score <= 60) {
return "B";
}
else if (score >= 59 && score <= 50) {
return "C";
}
else if (score >= 49 && score <= 40) {
return "D";
}
else {
return "F";
}
}

console.log(studentsScore(68));
