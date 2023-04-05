let result = document.getElementById('result');

function updateResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = 'Error';
  }
}
