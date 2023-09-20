const add = function(augend, addend) {
	return augend + addend;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(array) {
  let sum = 0;
	for (const number of array) {
    sum+=number;
  }
  return sum;
};

const multiply = function(array) {
  // let result = array[0];
  // for (let index = 1; index < array.length; index++) {
  //   result *= array[index]
  //   console.log(result)
  // }

  // return result;
 
  return array.reduce((result, element) => result * element, 1);
};

const power = function(base, exponent) {
  let result = 1;
  for (let currentExponent = 1; currentExponent <= exponent; currentExponent++) {
    result *= base;
  }

  return result;
};

const factorial = function(number) {
	let result = 1;
  for (let index = number; index > 0; index--) {
    result *= index;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
