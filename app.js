const operations = ["+", "-", "*", "/"];
const equation = "=";
const calcuationsDefaults = ["", false];

let calcuations = { num1: "", num2: "", finalNum: "", operator: "", isOperator: false}

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
		calcuations.finalNum = "INFINITE! TRY NOT TO BREAK PLEASE!";
	}
	reset();

	const outputContainer = document.querySelector(".output-container");
	outputContainer.textContent = calcuations.finalNum;
}

const numButton = document.querySelectorAll(".button-flex");

numButton.forEach(element => {
	element.addEventListener("click", (e) => {
		if (equation == element.value) {
			operate();
		}
		operations.forEach(operator => {
			if (element.value == operator) {
				calcuations.operator = element.value;
				calcuations.isOperator = true;
				console.log(calcuations.operator);
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
		console.log(calcuations.num1);
	});
});

console.log(add(5,4));
console.log(subtract(5,4));
console.log(multiply(5,4));
console.log(divide(5,5));
