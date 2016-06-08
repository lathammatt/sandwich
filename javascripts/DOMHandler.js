// Variable to hold the final price. Default to 0.

// Variable to hold topping that the user selects
// var selectedTopping;

var meatChooser = document.getElementById("meat");
meatChooser.addEventListener("change", function meatOpt(event){
       var meatSelect = event.target.value;
       meatoverall = SandwichMaker.addMeat(meatSelect);
       SandwichMaker.addMeatTotal(meatoverall)
    }
);

var breadChooser = document.getElementById("bread");
breadChooser.addEventListener("change", function breadOpt(event){
	var breadSelect = event.target.value;
   	var breadoverall = SandwichMaker.addBread(breadSelect);
    SandwichMaker.addBreadTotal(breadoverall);
   }
);

var cheeseChooser = document.getElementById("cheese");
cheeseChooser.addEventListener("change", function cheeseOpt(event){
	var cheeseSelect = event.target.value;
   	var cheeseoverall = SandwichMaker.addCheese(cheeseSelect);
    SandwichMaker.addCheeseTotal(cheeseoverall);
   }
);

var vegChooser = document.getElementById("veggies");
vegChooser.addEventListener("onchange", function vegOpt(event){
	console.log("veggie", event);
	var vegSelect = event.target.value;
   	var vegoverall = SandwichMaker.addVeggies(vegSelect);
    SandwichMaker.addVegTotal(vegoverall);
   }
);
var condChooser = document.getElementById("conds");
condChooser.addEventListener("change", function condOpt(event){
	var condSelect = event.target.value;
   	var condoverall = SandwichMaker.addCond(condSelect);
    SandwichMaker.addCondTotal(condoverall);


   }
);



var button = document.getElementById("totalbutton");
var output = document.getElementById("finaltally");


button.addEventListener("click", function updateTotal (event){
	var finalSandwichPrice = 0;
	finalSandwichPrice = SandwichMaker.getTotal();
	output.innerHTML = finalSandwichPrice;
});


/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
  // Get the value chosen from the DOM
  // selectedTopping = event.target.value;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
  // 
  // var  = 
// });

console.log("final", SandwichMaker);