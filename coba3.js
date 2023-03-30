let result = document.getElementById('result');

function getResult(num) {
	result.value += num;
}

function backslide() {
    result.value = result.value.slice(0, -1);
}

function clearResult() {
	result.value = '';
}


function calculate() {
	result.value = eval(result.value);
}

