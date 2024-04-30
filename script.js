function backspace() {
	let display = document.getElementById("display");
	display.value = display.value.slice(0, -1);
}

function calculate() {
	let display = document.getElementById("display");
	let expression = display.value;
	let result;

	try {
		expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
		expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
		expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
        expression = expression.replace(/cot\(/g, 'sin(' + Math.PI / 180 + '*');
		expression = expression.replace(/cosec\(/g, 'cos(' + Math.PI / 180 + '*');
		expression = expression.replace(/sec\(/g, 'tan(' + Math.PI / 180 + '*');
        expression = expression.replace(/asin\(/g, 'asin(' + Math.PI / 180 + '*');
		expression = expression.replace(/acos\(/g, 'acos(' + Math.PI / 180 + '*');
		expression = expression.replace(/atan\(/g, 'atan(' + Math.PI / 180 + '*');
        expression = expression.replace(/acot\(/g, 'asin(' + Math.PI / 180 + '*');
		expression = expression.replace(/acosec\(/g, 'acos(' + Math.PI / 180 + '*');
		expression = expression.replace(/asec\(/g, 'atan(' + Math.PI / 180 + '*');

		result = math.evaluate(expression);
		display.value = result;
	} catch (error) {
		display.value = "Error";
	}
}
function baseELog() {
    let display = document.getElementById("display");
	display.value += "log()/log(e)";
    
}



function squareRoot() {
	let display = document.getElementById("display");
	display.value += "sqrt(";
}

function base10Log() {
	let display = document.getElementById("display");
	display.value += "log(";
}

function pi() {
	let display = document.getElementById("display");
	display.value += "pi";
}

function e() {
	let display = document.getElementById("display");
	display.value += "e";
}

function power() {
	let display = document.getElementById("display");
	display.value += "^(";
}

function arcsine() {
    var num = parseFloat(display.value);
    display.value = Math.asin(num);
}


function arccosine() {
    var num = parseFloat(display.value);
    display.value = Math.acos(num);
}


function arctangent() {
    var num = parseFloat(display.value);
    display.value = Math.atan(num);
}

function inverseCosecant() {
    var num = parseFloat(display.value);
    display.value = Math.asin(1 / num);
}


function inverseSecant() {
    var num = parseFloat(display.value);
    display.value = Math.acos(1 / num);
}

function inverseCotangent() {
    var num = parseFloat(display.value);
    display.value = Math.atan(1 / num);
}
