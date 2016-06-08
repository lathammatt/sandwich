// mustards - regular, mustard- spicy, mustard - honey, ketchup, A1, Heinz 57, Ranch Dressing, 
// 
var SandwichMaker = (function(maker) {

	var condChoice = {
		"regular_must": .10,
		"spicy_must": .10,
		"honey_must": .10,
		"ketchup": .10,
		"a1": .10,
		"heinz57": .10,
		"ranch": .10,
		"none": 0
	}

	maker.addCond = function(cond){
		var condTotal = condChoice[cond];
		return condTotal;
	}

	return maker;

})(SandwichMaker);