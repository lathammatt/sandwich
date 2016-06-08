// lettuce, black olives, spinach, cucumbers, pickles, 
// 
var SandwichMaker = (function(maker) {

	var vegChoice = {
		"lettuce": .25,
		"olives": .10,
		"spinach": .10,
		"cucumbers": .25,
		"pickles": .25,
		"none": 0
	}

	maker.addVeggies = function(vegs){
		var vegTotal = vegChoice[vegs];
		return vegTotal;
	}


	return maker;


})(SandwichMaker);