const palindromes = function (str) {
	const reversedString = str.split("").reverse().join("")
	return str === reversedString
};

console.log (ispalindrome("Ana")); //true
console.log (ispalindrome("hello"));  //false
// Do not edit below this line
module.exports = palindromes;
