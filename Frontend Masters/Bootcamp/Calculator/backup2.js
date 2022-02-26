let runningTotal = 0;
let buffer = 0;
let previousOperator;

const screen = document.querySelector(".screen");

(function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
})();

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  render();
}

function render() {
  return (screen.innerText = buffer);
}

function handleNumber(numberString) {
  if (buffer != "0") {
    buffer += numberString;
  } else {
    buffer = numberString;
  }
}

function clear() {
  runningTotal = 0;
  buffer = 0;
  previousOperator = null;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "AC":
      clear();
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
    case "=":
      flushOperation();
      break;
  }

  runningTotal = parseInt(buffer);
  previousOperator = symbol;
  buffer = 0;
}

function handleMath() {
  intBuffer = parseInt(buffer);
  if (previousOperator == "+") {
    runningTotal += intBuffer;
  }
}

function flushOperation() {
  screen.innerText = runningTotal;
}
