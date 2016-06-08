// white, wheat
// toasted option

var SandwichMaker = (function(maker) {


	var breadChoice = {
		"white": 2.00,
		"wheat": 1.50,
		"toasted": .50
	}

	maker.addBread = function(bread){
		var breadTotal = breadChoice[bread];
		return breadTotal;
	}

	return maker;

	
})(SandwichMaker);