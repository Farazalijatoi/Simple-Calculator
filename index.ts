import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter your first Number",
    type: "number",
    name: "FirstNumber",
  },
  { message: "Enter your second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division", "Modulus"],
  },
]);
if (answer.operator === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "Substraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
}
else if (answer.operator === "Modulus") {
  console.log(answer.FirstNumber % answer.SecondNumber);
}
