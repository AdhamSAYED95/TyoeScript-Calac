"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    while (true) {
        var firstStr = (0, readline_sync_1.question)("Enter the first number:\n ");
        var operator = (0, readline_sync_1.question)("Enter operator:\n ");
        var secondStr = (0, readline_sync_1.question)("Enter the second number:\n ");
        var validInput = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
        console.log(validInput);
        if (validInput) {
            var firstNum = parseInt(firstStr);
            var secondNum = parseInt(secondStr);
            var result = calculate(firstNum, operator, secondNum);
            console.log(result);
            var exit = (0, readline_sync_1.question)("If you want to exit type exit: \n");
            if (exit.toLowerCase() === "exit") {
                break;
            }
        }
        else {
            console.log("\nInvalid input \n");
            main();
        }
        console.log("Calculator exited.");
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            if (secondNum === 0) {
                throw new Error("Division by zero is not allowed");
            }
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    return !isNaN(parseInt(str));
}
main();
