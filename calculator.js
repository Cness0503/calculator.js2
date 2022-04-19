var readlineSync = require('readline-sync');

var firstnum = readlineSync.questionFloat("Please enter your first number: ");
var secondnum = readlineSync.questionFloat("Please enter your second number: ");
var enteredoperation = readlineSync.question("Please enter the operation to perform: (add, sub, mul, div): ");

function myaddition(a, b){
    return a + b;
}

function mysubtraction(a, b){
    return a - b;
}

function mymultiplication(a, b){
    return a * b;
}

function mydivision(a, b){
    return a / b;
}

function mycalculator(firstnum, secondnum, operation){

    switch(operation){
        case "add":
            console.log("Addition of First number: " + firstnum + " and Second number: " + secondnum + " returns a result of: " + myaddition(firstnum, secondnum));
            break;
        case "sub":
            console.log("Subtraction of First number: " + firstnum + " and Second number: " + secondnum + " returns a result of: " + mysubtraction(firstnum, secondnum));
            break;
        case "mul":
            console.log("Multiplication of First number: " + firstnum + " and Second number: " + secondnum + " returns a result of: " + mymultiplication(firstnum, secondnum));
            break;
        case "div":
            console.log("Division of First number: " + firstnum + " and Second number: " + secondnum + " returns a result of: " + mydivision(firstnum, secondnum));
            break;
        default:
            console.log ("Invalid operation.  Please try again!");

    }
}

mycalculator(firstnum, secondnum, enteredoperation);