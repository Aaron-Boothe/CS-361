/*********************************************************************
** Program Filename: article.js
** Author: Aaron Boothe
** Date: 5/09/2022
** Description: JS file for the Articles pages for the CS-361 Dam News product.
*********************************************************************/
// Help on how to make collapsibles:
// https://www.w3schools.com/howto/howto_js_collapsible.asp
var collap = document.getElementsByClassName("collapsible");
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