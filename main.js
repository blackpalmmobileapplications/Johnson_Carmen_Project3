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
