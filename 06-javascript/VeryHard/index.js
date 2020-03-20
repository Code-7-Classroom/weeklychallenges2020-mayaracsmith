// Create a simple calculator that prompts the user for a number, an operator 
// (either +, -, * or /) and another number, and then uses the functions created 
// in the hard challenge to output the value in sentence form. 
// Example output: "3 + 4 = 7"


var num1 = prompt("Please enter a number:");
var operator = prompt("Please enter an operator (+ , - , * , /) :");
var num2 = prompt("Please enter another number:");

function add(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 + num2;
}


function subtract(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 - num2;
}


function multiply(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 * num2;
}


function divide(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 / num2;
}

if (operator === "+") {
    console.log(num1 + " + " + num2 + " = " + add(num1,num2));
} else if (operator === "-"){
    console.log(num1 + " - " + num2 + " = " + subtract(num1,num2));
} else if (operator === "*"){
    console.log(num1 + " * " + num2 + " = " + multiply(num1,num2));
} else if (operator === "/"){
    console.log(num1 + " / " + num2 + " = " + divide(num1,num2));
}
else {
    console.log("sorry try again")
}