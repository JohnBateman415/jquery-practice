/* global $ */
// the previous comment makes global warning go away

$( document ).ready( function () { //Eduardo says can also use jquery( document )...but I was not able to {

    var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "black"];

    // The following uses jquery to select elements with jquery selector
    var myButton = $("button") //$ triggers call to jquery selector to select button element, and return it to a var

    myButton.click( function() {

        var arrayIndexChoice = Math.random() * 7; // will return 0.07 - 6.93
        console.log("Raw Random Number is "+arrayIndexChoice);
        arrayIndexChoice = Math.floor(arrayIndexChoice); //rounds down 
        console.log("Going to pull array index "+ arrayIndexChoice + " which is "+colors[arrayIndexChoice]);


        var htmlBody = $("body");
        htmlBody.css("background-color", colors[arrayIndexChoice]);
        console.log( "background color is now "+ htmlBody.css("background"));
        
        if ("rgb(0,0,0)" == htmlBody.css("background-color") ) {
            console.log("XxxXxxxxXXXXXXXXX");
        }
    } );
  


  
    
});

