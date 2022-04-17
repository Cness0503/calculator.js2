var readlineSync = require('readline-sync');

var firstnum = readlineSync.questionInt("Please enter your first number");
var secondnum = readlineSync.questionInt("Please enter your second number");
var enteredoperation = readlineSync.questionInt("Please enter the operation to perform: (add, sub, mul, div): ");
 
switch(enteredoperation){
    case 1: "add";
        console.log(firstnum + secondnum);
      break;
    case 2: "sub";
        console.log(firstnum - secondnum);
        break;
    case 3: "mul";
        console.log(firstnum * secondnum);
        break;
    case 4: "div";
    console.log(firstnum / secondnum);
        break;
    default:
        console.log (0);
}
console.log(firstnum, secondnum, enteredoperation);