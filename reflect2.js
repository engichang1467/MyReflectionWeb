function say_hello () {
  alert("Hello World");
}

function ask_user () {
  var user = prompt("What's your name: ");
  alert("Hi! " + user + " Welcome to my blog");
}

function say_something () {
  alert("Hi! you can actually click on it!!!");
}

function changeColor () {
  document.body.style.backgroundColor = "green";
  document.body.style.fontFamily = "Courier New";
}

function changeBack () {
  document.body.style.backgroundColor = "";
  document.body.style.fontFamily = "";
}

var clicked = false;

function changeColor2 () {

  if(clicked){

    document.body.style.backgroundColor = "pink";
    document.body.style.fontFamily = "Arial";
  
  } else {
  
    document.body.style.backgroundColor = "";
    document.body.style.fontFamily = "";
  
  }

  clicked = !clicked;

}

function changeText () {
  var sen = document.getElementById("changeMe");
  var sen2 = document.getElementById("changeMe2");

  sen.style.fontStyle = "italic";
  sen.style.fontWeight = "bold";
  sen.style.color = "blue";

  sen2.style.fontStyle = "italic";
  sen2.style.fontWeight = "bold";
  sen2.style.color = "blue";

}

function changeText_Back () {
  var sen = document.getElementById("changeMe");
  var sen2 = document.getElementById("changeMe2");

  sen.style.fontStyle = "";
  sen.style.fontWeight = "";
  sen.style.color = "";

  sen2.style.fontStyle = "";
  sen2.style.fontWeight = "";
  sen2.style.color = "";


}

var clicked2 = false;
function changeText2 () {
  var sen = document.getElementById("changeMe");
  var sen2 = document.getElementById("changeMe2");

  if(clicked2){

    sen.style.fontStyle = "italic";
    sen.style.fontWeight = "bold";
    sen.style.color = "purple";

    sen2.style.fontStyle = "italic";
    sen2.style.fontWeight = "bold";
    sen2.style.color = "purple";

  } else {

    sen.style.fontStyle = "";
    sen.style.fontWeight = "";
    sen.style.color = "";

    sen2.style.fontStyle = "";
    sen2.style.fontWeight = "";
    sen2.style.color = "";

  }

  clicked2 = !clicked2;

}

var num = 0;

function add_1 () {
  num += 1;
  document.getElementById("here").innerHTML = "Value: " + num;
}

function reset () {
  num = 0;
  document.getElementById("here").innerHTML = "Value: " + num;
}

var clicked3 = false;
function changeImg() {
  if (clicked3){
    document.getElementById("myImg").src = "images/spinach-leaves.jpg";
  } else {
    document.getElementById("myImg").src = "images/Lettuce.jpg";
  }
  clicked3 = !clicked3;
  
}

var up = true;
var value = 0;
var increment = 1;
var ceiling = 10;

function Add_1_til10() {
  if (up == true && value <= ceiling) {
    value += increment

    if (value == ceiling) {
      up = false;
    }
  } else {
      up = false
      value = 0;

      if (value == 0) {
        up = true;
      }
  }

  document.getElementById('metoo').innerHTML = 'Value: ' + value + '<br />';
}


function changeimgs () {
  var counter = 0;
  if(counter == 0){
    document.getElementById("img2").src="images/6-Pack-Chicken-Eggs.jpg";
    counter++;

  } else if(counter == 1){
    document.getElementById("img2").src="images/Lettuce.jpg";
    counter++;

  } else if(counter == 2){
    document.getElementById("img2").src="images/Orange-Fruit-Pieces.jpg";
    counter++;

  } else if(counter == 3){
    document.getElementById("img2").src="images/spinach-leaves.jpg";
    counter = 0;

  }
}


function add_stars(){

  var allElmts = document.getElementsByClassName("classValue");
  var i;
  for (i=0; i < allElmts.length; i++) {  
    allElmts[i].innerHTML += "***";
  }

}


function remove_stars(){

  var allElmts = document.getElementsByClassName("classValue");
  var i;
  for (i=0; i < allElmts.length; i++) {  
    allElmts[i].innerHTML = "";
  }

}


function add_some_stars() {

  var allElmts = document.getElementsByClassName("val2");
  var i;
  for (i=0; i < allElmts.length; i++) {  
    allElmts[i].innerHTML += "***";
  }

}


function RemoveOList1st() {

  var list = document.getElementById("myOlist");
  var list_first = document.getElementById("myOlist").firstChild.innerHTML;
  
  if(list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  }

  document.getElementById("here2").innerHTML= list_first;

}


function RemoveOListLast() {
  var list = document.getElementById("myOlist");
  var list_last = document.getElementById("myOlist").lastChild.innerHTML;


  var list_items = list.getElementsByTagName("li");
  var last = list_items[list_items.length-1];
  list.removeChild(last);

  document.getElementById("here2").innerHTML = list_last;

}


function AddNewList () {

  var list = document.getElementById("myOlist");
  var theColor = document.getElementById("favcolor").value;

  var theText = document.getElementById("listname").value;

  var entry = document.createElement('li');
  
  entry.appendChild(document.createTextNode(theText));
  var newEntry = list.appendChild(entry);
  newEntry.style.color = theColor;
    
}
