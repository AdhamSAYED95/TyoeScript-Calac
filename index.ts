import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  while (true) {
    const firstStr: string = question(`Enter the first number:\n `);
    const operator: string = question(`Enter operator:\n `);
    const secondStr: string = question(`Enter the second number:\n `);

    const validInput: boolean =
      isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
    console.log(validInput);

    if (validInput) {
      const firstNum: number = parseInt(firstStr);
      const secondNum: number = parseInt(secondStr);
      const result = calculate(firstNum, operator as Operator, secondNum);

      console.log(result);

      const exit: string = question(`If you want to exit type exit: \n`);
      if (exit.toLowerCase() === "exit") {
        break;
      }
    } else {
      console.log(`\nInvalid input \n`);
      main();
    }
  }
}

function calculate(
  firstNum: number,
  operator: Operator,
  secondNum: number
): number {
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

function isOperator(operator: string): boolean {
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

function isNumber(str: string): boolean {
  return !isNaN(parseInt(str));
}

main();
