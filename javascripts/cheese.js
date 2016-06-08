// American, Swiss, cheddar, mozzarella, provolone, 
// 
var SandwichMaker = (function(maker) {

	var cheeseChoice = {
		"american": .50,
		"swiss": .25,
		"cheddar": 1.50,
		"mozzarella": .50,
		"provolone": .75,
		"none": 0

	}

	maker.addCheese = function(cheese){
		var cheeseTotal = cheeseChoice[cheese];
		return cheeseTotal;
	}

	return maker;

})(SandwichMaker);