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
  screen.innerText = buffer;
}

function handleNumber(number) {
  if (buffer == 0) {
    buffer = number;
  } else {
    buffer = buffer + number;
  }
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
      buffer = flushOperation(parseInt(buffer));
      break;
    case "←":
      removeChar();
      break;
  }
}

function handleMath(symbol) {
  intBuffer = parseInt(buffer);
  previousOperator = symbol;
  if (runningTotal == 0) {
    runningTotal += intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  buffer = 0;
}

function flushOperation(intBuffer) {
  if (previousOperator == "+") {
    return runningTotal + intBuffer;
  } else if (previousOperator == "−") {
    return runningTotal - intBuffer;
  } else if (previousOperator == "×") {
    return runningTotal * intBuffer;
  } else if (previousOperator == "÷") {
    return runningTotal / intBuffer;
  }
}

function clear() {
  runningTotal = 0;
  buffer = 0;
  previousOperator = null;
}

function removeChar() {
  if (buffer.length != 1) {
    buffer = buffer.slice(0, buffer.length - 1);
  }
}
