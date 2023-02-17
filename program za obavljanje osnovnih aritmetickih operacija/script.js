function add(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: division by zero!";
  }
}

var firstNumber = parseFloat(prompt("Enter first number:"));
var operation = prompt("Enter the operation(+, -, *, /):");
var secondNumber = parseFloat(prompt("Enter second number:"));

var result;
if (operation === "+") {
  result = add(firstNumber, secondNumber);
} else if (operation === "-") {
  result = subtraction(firstNumber, secondNumber);
} else if (operation === "*") {
  result = multiply(firstNumber, secondNumber);
} else if (operation === "/") {
  result = division(firstNumber, secondNumber);
} else {
  result = "Error: unknown operation!";
}

alert("Result is: " + result);
