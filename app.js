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


function operate() {
	if (calcuations.operator == operations[0]) {
		add(calcuations.num1, calcuations.num2);
	}
	if (calcuations.operator == operations[1]) {
		subtract(calcuations.num1, calcuations.num2);
	}
	if (calcuations.operator == operations[2]) {
		multiply(calcuations.num1, calcuations.num2);
	}
	if (calcuations.operator == operations[3]) {
		divide(calcuations.num1, calcuations.num2);
	}
}

const numButton = document.querySelectorAll(".button-flex");

numButton.forEach(element => {
	element.addEventListener("click", (e) => {
		operations.forEach(operator => {
			if (element.value == operator) {
				calcuations.operator = element.value;
				console.log(calcuations.operator);
			}
		});
		
		calcuations.num1 = calcuations.num1 + element.value;
		console.log(element.value);
		console.log(calcuations.num1);
	});
});

console.log(add(5,4));
console.log(subtract(5,4));
console.log(multiply(5,4));
console.log(divide(5,5));
