// calculator.js
function calculate(firstNumber, secondNumber, operation) {
    let result;
  
    switch(operation) {
      case '+':
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case '-':
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case '*':
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case '/':
        if(secondNumber != '0') {
          result = parseFloat(firstNumber) / parseFloat(secondNumber);
        } else {
          throw new Error('Division by zero is not allowed.');
        }
        break;
      default:
        throw new Error('Invalid operation! Please enter either +, -, *, or /.');
    }
  
    return result;
  }
  
  module.exports = calculate;