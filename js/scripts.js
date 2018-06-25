/* global $ */
// the previous comment makes global warning go away

$( document ).ready( function () {

  console.log("Document was loadeda");

});

// The following uses jquery to select elements with jquery selector
var myButton = $("button") //$ triggers call to jquery selector to select button element, and return it to a var
myButton.click( function() {
    console.log("myButton was pressed!");
} );  //an anonymous function