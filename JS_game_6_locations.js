

      var BAD = -1;
      var NORTH = 0;
      var SOUTH = 1;
      var EAST = 2;
      var WEST = 3;
      
      function Location(locationId, locationName, locationDescription) {
      	this.id = locationId;
      	this.name = locationName;
      	this.description = locationDescription;
      	
      	//this.validDirections = [BAD, BAD, BAD, BAD]; //Array
      	this.visited = false;
      	this.toString = function() {
      		var message = "Location: " + this.name + "\n\n" + this.description;
      		return (message);
      	}
      	this.visit = function() {
      		currentLoc = this.id;
      		if (this.visited === false) {
      			this.visited = true;
      			score += 5;
      		}
      		displayMessage (this.toString());
      		disableButtons(this.validDirections);
      		updateScore();
      		}
      	}
      	
      var center = new Location(0, "Middle of Price Chopper", "You are in the middle of Price Chopper.");
      var bakery = new Location(1, "Bakery Section", "You are in the bakery section. Your friend Molly is admiring the Lofthouse cookies!");
      var dairy = new Location(2, "Dairy Aisle", "You are in the dairy aisle. It's cold in here!");
      var produce = new Location(3, "Produce Section", "You're in the produce section. Looks like apples are in season this time of year.");
      var junk = new Location(4, "Junk Food Aisle", "You are in the junk food aisle. They have the strangest potato chip flavors these days!");
      var spices = new Location(5, "Spices Aisle", "You're in the spices aisle. Don't sneeze!");
      var lobster = new Location(6, "Seafood Counter", "You're standing at the seafood counter. Run, lobsters! Be free!");
      var cereal = new Location(7, "Cereal Aisle", "You're in the cereal aisle. Golden Grahams are by far the superior choice.");
      var pasta = new Location(8, "Pasta Aisle", "You're in the pasta aisle. There's your friend Dan, he basically lives here.");
      var ramen = new Location(9, "Ramen Aisle", "You're in the ramen aisle. There are a bunch of college kids here.");
      var veggie = new Location(10, "Vegetable Section", "You're in the vegetable section. Looks like there's plenty of kale left.");
      
      var locations = [ center, bakery, dairy, produce, junk, spices, lobster, cereal, pasta, ramen, veggie ]
      
      center.validDirections = [ bakery.id, produce.id, dairy.id, junk.id ];
      bakery.validDirections = [ BAD, center.id, spices.id, pasta.id ];
      dairy.validDirections = [ spices.id, lobster.id, BAD, center.id ];
      produce.validDirections = [ center.id, veggie.id, lobster.id, cereal.id ];
      junk.validDirections = [ pasta.id, cereal.id, center.id, BAD ];
      spices.validDirections = [ BAD, dairy.id, BAD, bakery.id ];
      lobster.validDirections = [ dairy.id, BAD, BAD, produce.id ];
      cereal.validDirections = [ junk.id, ramen.id, produce.id, BAD ];
      pasta.validDirections = [ BAD, junk.id, bakery.id, BAD ];
      ramen.validDirections = [ cereal.id, BAD, veggie.id, BAD ];
      veggie.validDirections = [ produce.id, BAD, BAD, ramen.id ];