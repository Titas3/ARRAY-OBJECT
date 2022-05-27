// Write a program to get an input (‘How are you’) and by default it should be good 
// in the prompt text box.


let person = prompt("How are you", "Titas");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}


/*
let text;
let favDrink = prompt("What's your favorite cocktail drink?");
switch(favDrink) {
  case "Coca-Cola":
    text = "Excellent choice! Coca-Cola is good for your soul.";
    break;
  case "Pepsi":
    text = "Pepsi is my favorite too!";
    break;
  case "Sprite":
    text = "Really? Are you sure the Sprite is your favorite?";
    break;
  default:
    text = "I have never heard of that one!";
} */
