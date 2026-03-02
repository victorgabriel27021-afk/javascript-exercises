const add = function(a, b) {
	return = a + b;
	console.log (add(1, 2));
};

const subtract = function(a, b) {
	return = a - b;
	console.log (substract(3, 4));
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0)
	console.log(sum([1, 2, 3, 4]));
};

const multiply = function(array) {
	return array.reduce ((product, current) => product * current, 1)
	console.log(multiply([1, 2, 3, 4]));
};

const power = function(a, b) {
  return = a ** b;
  console.log (add(3, 4))
};

const factorial = function(n) {
	if (n < 0) "Negative's number don't have factorial";
  let product = 1;
  for (let i = n; i > 0; i--) {
  	product *= i;
  }
  return product;
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
