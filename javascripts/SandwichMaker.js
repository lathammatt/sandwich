var SandwichMaker = (function() {


  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addMeatTotal: function(meatoverall) {
      totalPrice += meatoverall;
      return totalPrice;
  		},
  	addBreadTotal: function(breadoverall) {
      totalPrice += breadoverall;
      return totalPrice;
  		},
  	addCheeseTotal: function(cheeseoverall) {
      totalPrice += cheeseoverall;
      return totalPrice;
  		},
  	addVegTotal: function(vegoverall) {
      totalPrice += vegoverall;
      return totalPrice;
  		},
  	addCondTotal: function(condoverall) {
      totalPrice += condoverall;
      return totalPrice;
  		},
  	getTotal: function(){
  		return totalPrice;	
  	}

    // }  
    // }
  };


})();