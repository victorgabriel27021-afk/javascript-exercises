const leapYears = function(ano) {
	function ehbissexto(ano){
		if (ano % 4 === 0)
			return true;
	}
	    if (ano % 100 === 0) {
	    	return false;
	}
	    if ( ano % 4 === 0) {
	    	return true;
	}
	return false;

};

// Do not edit below this line
module.exports = leapYears;
