// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  // turkey, ham, beef, chicken, bacon
  var meatPrices = {
  			"turkey": 0.50,
			"ham": 1.00,
			"roast_beef": 1.50,
			"chicken": 1.00,
			"bacon": 2.00,
			"none": 0
			}

  maker.addMeat = function(meat) {
  	meatTotal = meatPrices[meat]
  	return meatTotal;
  };

  // Return the new, augmented object with the new method on it
  return maker;


})(SandwichMaker);