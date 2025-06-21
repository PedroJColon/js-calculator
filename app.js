const operations = ["+", "-", "*", "/"];
const equation = "=";
const calculationsDefaults = ["", false];

let calculations = { num1: "", num2: "", finalNum: "", operator: "", isOperator: false, infiniteAnswer: false}

function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiply(a,b) {
	return a * b;
}

function divide(a,b) {
	return a / b;
}

function reset() {
	calculations.num1 = calculationsDefaults[0];
	calculations.num2 = calculationsDefaults[0];
	calculations.operator = calculationsDefaults[0];
	calculations.isOperator = calculationsDefaults[1];
}

function operate() {
	let output = 0;

	// Convert strings into numbers
	calculations.num1 = Number(calculations.num1);
	calculations.num2 = Number(calculations.num2);
	
	// Determine what operation to perform.
	// NOTE: Did not use for loop due to operations having to be specific
	if (calculations.operator == operations[0]) {
		output = add(calculations.num1, calculations.num2);
	}
	if (calculations.operator == operations[1]) {
		output = subtract(calculations.num1, calculations.num2);
	}
	if (calculations.operator == operations[2]) {
		output = multiply(calculations.num1, calculations.num2);
	}
	if (calculations.operator == operations[3]) {
		output = divide(calculations.num1, calculations.num2);
	}
	// console.log(output);

	calculations.finalNum = output;
	if (calculations.finalNum == Infinity) {
		calculations.finalNum = "CANNOT COMPUTE DIVISION BY ZERO!";
		calculations.infiniteAnswer = true;
	}
	reset();
	
	const outputContainer = document.querySelector(".output-container");
	outputContainer.textContent = calculations.finalNum;
}

const numButton = document.querySelectorAll(".button-flex");
numButton.forEach(element => {
	element.addEventListener("click", (e) => {
		if (element.value == "reset") {
			reset();
			return;
		}
		if (element.value == equation) {
			operate();
			return;
		}
		operations.forEach(operator => {
			if (element.value == operator && !calculations.isOperator) {
				calculations.operator = element.value;
				calculations.isOperator = true;
				console.log(calculations.operator);
			}
			else if (element.value == operator && calculations.isOperator 
				&& !(calculations.num2 == calculationsDefaults[0])) {
				operate();
				calculations.operator = element.value;
				calculations.num1 = calculations.finalNum;
				calculations.isOperator = true;
				console.log(calculations.num1);
			}
			else if (element.value == operator && calculations.isOperator
				&& calculations.num2 == calculationsDefaults[0]) {
				calculations.operator = element.value;
			}
		});
		
		if (calculations.infiniteAnswer) {
			reset();
			calculations.finalNum = calculationsDefaults[0];
			calculations.infiniteAnswer = calculationsDefaults[1];
			return;
		}

		if (calculations.operator == element.value) {
			return;
		}

		if (calculations.isOperator) {
			calculations.num2 = calculations.num2 + element.value;
		}
		else {
			calculations.num1 = calculations.num1 + element.value;
		}
		// console.log(element.value);
	});
});
