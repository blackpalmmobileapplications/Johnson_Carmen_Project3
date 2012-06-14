/*Carmen Earl Johnson
VFW Project 2
June 7th 2012*/

var itemsArray = [];						// GLOBAL VARIABLE
var categories = ["shelter", "bedding", "cooking", "clothing", "firstaid"];
var items = 0;								// GLOBAL VARIABLE
var el = function(arg) { 					// METHOD FUNCTION
	return document.getElementById(arg); 	// RETURN OBJECT
};

var makeTitleCase = function(arg) {
	if (arg.length >= 1)
		return (arg.substr(0,1).toUpperCase() + arg.substr(1, arg.length));
	else return arg;
};

window.onload = function() {
	el('button').setAttribute('onclick', 'validate();');
	el('clearButton').setAttribute('onclick', 'clearlist();');
	
	var len = categories.length;
	for (i=0; i<len; i++) {
		var temp = document.createElement("option");
		temp.value = categories[i];
		temp.innerHTML = makeTitleCase(categories[i]);
		el('category').appendChild(temp);
	}
};

// GLOBAL VARIABLE
var shelter = [ "tent", "ground cloth", "ground tarp", "extra stakes", "shade", "shade poles", "shade rope", "shade stakes", "axe",
				"hammer", "mat", "dust pan", "Dust brush" ];

// GLOBAL VARIABLE
var bedding = [ "sleeping bag", "sheets", "blankets", "pillow", "air mattress", "sleeping pad", "cot", "tarp", "air pump", "repair kit for air mattress",
				"utility bags for storage" ];

// GLOBAL VARIABLE
var cooking = [ "large water jug", "water bucket", "coolers", "ice", "thermos", "stove", "stove with fuel", "stove with propane", "matches",
				"lighter", "charcoal", "firewood", "buddy burner", "oven", "tin can", "box oven", "campfire grill", "barbeque grill",
				"fire starters", "newspapers", "tablecloth", "thumb tacks", "clips", "plates", "bowls", "paper plates", "paper bowls", "silverware",
				"plastic silverware", "measuring cups", "aluminium foil", "paper towels", "trash bags", "dish soap", "cloth pins", "cooking oil",
				"pam spray", "containers", "pot holders", "oven mitts", "pots", "frying pans", "pan lids", "soap", "tongs", "skewers", "grill forks",
				"can opener", "bottle opener", "folding table", "dutch oven", "pie irons", "mugs", "paper cups", "mixing bowls", "cutting board",
				"ziplock bags", "napkins", "dish pan", "dish rag", "towels", "scrub pad", "brillo", "seasonings", "sugar", "condiments", "potato peeler"];

// GLOBAL VARIABLE
var clothing = ["shoes", "boots", "jeans", "pants", "shirts", "belts", "t-shirts", "socks", "hat", "bandana", "sweatshirt", "underwear", "raincoat"];

// GLOBAL VARIABLE
var firstaid = ["medicine", "bandages", "adhesive tape", "antiseptic" ,"cotton", "tweezers", "scissors", "tissues", "sunscreen"];

// GLOBAL VARIABLE
var miscellaneous = ["funds", "games", "mp3 player", "gps", "books", "radio"];

function para(field, val) {																			// METHOD FUNCTION
	return "<p>" + "<strong>" + field + ": </strong>" + val + "</p>";								// RETURN STRING
}

function clearForm() {																				// METHOD FUNCTION
	el('name').value = "";																			// MATH
	el('quantity').value = "1";																		// MATH
	el('comments').value = "";																		// MATH
	el('date').value = "";
	el('important').checked = false;
}

function display() {																						// METHOD FUNCTION
	var text = "";																							// LOCAL VARIABLE
	var len = itemsArray.length;																			// LOCAL VARIABLE & MATH
	
	for (i=0; i<len; i++) {																					// FOR LOOP
		text += "<div class='listitem'>" + 																	// MATH - (multi line statement)
				para("Category", itemsArray[i]['category']) + 
				para("Name", itemsArray[i]['name']) + 
				para("Quantity", itemsArray[i]['quantity']) + 
				para("Purchase By", itemsArray[i]['date']) +
				para("Important", itemsArray[i]['important']) +
				para("Comments", itemsArray[i]['comments']) + 
				"<a class='button' onclick='deleteItem("+ itemsArray[i]['idno'] +");'>Delete Item</a>" +
				"<a class='button' onclick='editItem("+ itemsArray[i]['idno'] +");'>Edit Item</a>" + 
				"</div>";
	}
	el('listbox').innerHTML = text;																			// MATH
}
