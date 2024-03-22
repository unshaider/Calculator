#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answers: {
  number1: number;
  number2: number;
  operator: string;
} = await inquirer.prompt([
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
  {
    type: "list",
    name: "operator",
    message: "Select the operator:",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answers.operator === "Addition") {
  console.log(answers.number1 + answers.number2);
} else if (answers.operator === "Subtraction") {
  console.log(answers.number1 - answers.number2);
} else if (answers.operator === "Multiplication") {
  console.log(answers.number1 * answers.number2);
} else if (answers.operator === "Division") {
  console.log(answers.number1 / answers.number2);
}
