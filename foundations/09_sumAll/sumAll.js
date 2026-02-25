const sumAll = function(soma) {
	soma(3, 4)
	let soma = 0
	let inicio = Math.min(3, 4)
	let fim = Math.max(3, 4)
	for (let i = inicio; i <= fim; i++){
		soma += i
	}
    return soma;
};

// Do not edit below this line
module.exports = sumAll;
