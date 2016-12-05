// Jillian Srygley
// Game Locations - JavaScript file

	function center() {
		var locationDescription = "0. You are in the middle of Price Chopper.";
			return locationDescription;
	}
	
	function bakery() {
		var locationDescription = "1. You are in the bakery section. Your friend Molly is admiring the Lofthouse cookies!";
		return locationDescription;
	}
	
	function dairy() {
		var locationDescription = "2. You are in the dairy aisle. It's cold in here!";
		return locationDescription;
	}
	
	function produce() {
		var locationDescription = "3. You're in the produce section. Looks like apples are in season this time of year.";
		return locationDescription;
	}
	
	function junk() {
		var locationDescription = "4. You are in the junk food aisle. They have the strangest potato chip flavors these days!";
		return locationDescription;
	}
	
	function spices() {
		var locationDescription = "5. You're in the spices aisle. Don't sneeze!";
		return locationDescription;
	}
	
	function lobster() {
		var locationDescription = "6. You're standing at the seafood counter. Run, lobsters! Be free!";
		return locationDescription;
	}
	
	function cereal() {
		var locationDescription = "7. You're in the cereal aisle. Golden Grahams are by far the superior choice.";
		return locationDescription;
	}
	
	function pasta() {
		var locationDescription = "8. You're in the pasta aisle. There's your friend Dan, he basically lives here.";
		return locationDescription;
	}
	
	function ramen() {
		var locationDescription = "9. You're in the ramen aisle. There are a bunch of college kids here.";
		return locationDescription;
	}
	
	function veggie() {
		var locationDescription = "10. You're in the vegetable section. Looks like there's plenty of kale left.";
		return locationDescription;
	}
	
    // This function handles a lot more than just displaying this location's message
	// The player can only advance if they've completed their shopping list
	// It hides the player buttons so that only the game win button remains
	
	function checkOut() {
 	   if ( (cupcakeCount > 0 ) && (carrotCount > 0 ) && (pringlesCount > 0 ) && (bananaCount > 0 ) && (lobsterCount > 0)) {
 		   var locationDescription = "You've reached the checkout line. Looks like you picked up everything you need - time to use that coupon!";
 		   showElement("couponButton");
 		   hideElement("North");
 		   hideElement("South");
 		   hideElement("East");
 		   hideElement("West");
 		   hideElement("takeButton");
 		   hideElement("helpButton");
 		   hideElement("cartButton");
 		   hideElement("goButton");
 		   hideElement("textCommand");
 	   } else {
 		   locationDescription = "You've reached the checkout line. But you haven't picked up everything you need - time to head back into the aisles!";
 	   }
 	   return locationDescription;
    }