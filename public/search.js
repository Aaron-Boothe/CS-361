/*********************************************************************
** Program Filename: search.js
** Author: Aaron Boothe
** Date: 4/24/2022
** Description: JS file for the Search page for the CS-361 Dam News product.
*********************************************************************/

// Clear all button
var clearAllButton = document.getElementById('search-clear-container')

// clearAllButton.addEventListener('click', function () {
// 	alert("WARNING: Are you sure you want to clear all search fields?")
// })

// Help on how to make a confirm box
// 		https://www.w3schools.com/js/js_popup.asp
clearAllButton.addEventListener('click', function () {
	// var txt;
	if (confirm("WARNING: Are you sure you want to clear all search fields?")) {
		// txt = "You pressed OK!";
		document.getElementById("title").value = '';
		document.getElementById("author").value = '';
		document.getElementById("organization").value = '';
		document.getElementById("tags").value = '';
		document.getElementById("date").value = '';
	} 
	else {
		// txt = "You pressed Cancel!";
	}
})

// clearAllButton.addEventListener('click', function () {
// 	document.getElementById("title").value = '';
// 	document.getElementById("author").value = '';
// 	document.getElementById("organization").value = '';
// 	document.getElementById("tags").value = '';
// 	document.getElementById("date").value = '';
// })

// Help on how to make collapsibles:
// 		https://www.w3schools.com/howto/howto_js_collapsible.asp
var collap = document.getElementsByClassName("collapsibleSearch");
var i;

for (i = 0; i < collap.length; i++) {
  collap[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 