#! /usr/bin/env node


import inquirer from "inquirer";

let answer = await inquirer.prompt([
  {
    message: "Enter your first number",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter your Second number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Enter your Third number",
    type: "number",
    name: "thirdNumber",
  },
  {
    message: "Select one of the operator to perform action",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

console.log(answer);

// Conditional statements
if (answer.operators === "Addition") {
  console.log(
    "Your value is",
    answer["firstNumber"] + answer["secondNumber"] + answer["thirdNumber"]
  );
} else if (answer.operators === "Subtraction") {
  console.log(answer["firstNumber"] - answer["secondNumber"] - answer["thirdNumbe"])
} else if (answer.operators === "Multiplication") {
    console.log(answer["firstNumber"] * answer["secondNumber"] * answer["thirdNumbe"])
} else if (answer.operators === "Division") {
    console.log(answer["firstNumber"] / answer["secondNumber"] / answer["thirdNumbe"])
} 
