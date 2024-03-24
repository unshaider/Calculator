#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
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
]);
if (answers.operator === "Addition") {
    console.log(answers.number1 + answers.number2);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.number1 - answers.number2);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.number1 * answers.number2);
}
else if (answers.operator === "Division") {
    console.log(answers.number1 / answers.number2);
}
else if (answers.operator === "Exponentiation") {
    console.log(answers.number1 ** answers.number2);
}
else if (answers.operator === "Modulus") {
    console.log(answers.number1 % answers.number2);
}
