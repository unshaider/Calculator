#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answers: {
  number1: number;
  number2: number;
  operator: string;
} = await inquirer.prompt([
  {
    type: "list",
    name: "operator",
    message: "Select the operation:",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Exponentiation",
      "Modulus",
    ],
  },
  {
    type: "number",
    name: "number1",
    message: "Enter your first number:",
  },
  {
    type: "number",
    name: "number2",
    message: "Enter your second number:",
  },
]);

if (answers.operator === "Addition") {
  console.log(
    chalk.green.bold("Result: ") + (answers.number1 + answers.number2)
  );
} else if (answers.operator === "Subtraction") {
  console.log(
    chalk.green.bold("Result: ") + (answers.number1 - answers.number2)
  );
} else if (answers.operator === "Multiplication") {
  console.log(chalk.green.bold("Result: ") + answers.number1 * answers.number2);
} else if (answers.operator === "Division") {
  console.log(chalk.green.bold("Result: ") + answers.number1 / answers.number2);
} else if (answers.operator === "Exponentiation") {
  console.log(
    chalk.green.bold("Result: ") + answers.number1 ** answers.number2
  );
} else if (answers.operator === "Modulus") {
  console.log(
    chalk.green.bold("Result: ") + (answers.number1 % answers.number2)
  );
}
