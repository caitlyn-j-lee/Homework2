function display2_1() {
  var myanswer  = "My answer goes here: console.log(saiyan.dragonball) outputs undefined due to an empty array saiyan called dragonball, console.log(null == undefined) outputs true because == means equal to, console.log(null === undefined) outputs false because === means equal to and is an equal type so it would be true if === null" // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
  var saiyan = {name: "Son Goku", age: 40}

}
function display2_2() {
  var myanswer  = "My answer goes here: You would get an error because x is not declared and 'use strict' is in the code. If 'use strict' is removed then the code will error." // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "My answer goes here: We can see the children that we weren't able tosee on the HTML because we used the .children of the ID div_1134, Javascript can get the ID's children since they're wrapped by div_1134" // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName; // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName("naruto"); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById("div_1134").children; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}
