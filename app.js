const operations = ["+", "-", "*", "/"];
const equation = "=";
const calcuationsDefaults = ["", false];

let calcuations = { num1: "", num2: "", finalNum: "", operator: "", isOperator: false, infiniteAnswer: false}

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
	calcuations.num1 = calcuationsDefaults[0];
	calcuations.num2 = calcuationsDefaults[0];
	calcuations.operator = calcuationsDefaults[0];
	calcuations.isOperator = calcuationsDefaults[1];
}

function operate() {
	let output = 0;

	// Convert strings into numbers
	calcuations.num1 = Number(calcuations.num1);
	calcuations.num2 = Number(calcuations.num2);
	
	// Determine what operation to perform.
	// NOTE: Did not use for loop due to operations having to be specfic
	if (calcuations.operator == operations[0]) {
		output = add(calcuations.num1, calcuations.num2);
	}
	if (calcuations.operator == operations[1]) {
		output = subtract(calcuations.num1, calcuations.num2);
	}
	if (calcuations.operator == operations[2]) {
		output = multiply(calcuations.num1, calcuations.num2);
	}
	if (calcuations.operator == operations[3]) {
		output = divide(calcuations.num1, calcuations.num2);
	}
	console.log(output);

	calcuations.finalNum = output;
	if (calcuations.finalNum == Infinity) {
		calcuations.finalNum = "CANNOT COMPUTE DIVISION BY ZERO!";
		calcuations.infiniteAnswer = true;
	}
	reset();
	
	const outputContainer = document.querySelector(".output-container");
	outputContainer.textContent = calcuations.finalNum;
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
			if (element.value == operator && !calcuations.isOperator) {
				calcuations.operator = element.value;
				calcuations.isOperator = true;
				console.log(calcuations.operator);
			}
			else if (element.value == operator && calcuations.isOperator 
				&& !(calcuations.num2 == calcuationsDefaults[0])) {
				operate();
				calcuations.operator = element.value;
				calcuations.num1 = calcuations.finalNum;
				calcuations.isOperator = true;
				console.log(calcuations.num1);
			}
		});
		if (calcuations.operator == element.value) {
			return;
		}

		if (calcuations.isOperator) {
			calcuations.num2 = calcuations.num2 + element.value;
		}
		else {
			calcuations.num1 = calcuations.num1 + element.value;
		}
		console.log(element.value);
	});
});