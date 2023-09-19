const sumAll = function(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number" || firstNumber < 0 || secondNumber < 0) return "ERROR";
  if (firstNumber > secondNumber) {
    const placeholderNumber = firstNumber;
    firstNumber = secondNumber;
    secondNumber = placeholderNumber;
  }
  
  let sum = 0;
  for (let number = firstNumber; number <= secondNumber; number++){
    sum += number;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
