// ------------------------ The JavaScript Code to Randomly Change the Dice Image of Player-1 ---------------------------

// Create a randomNumber Gen
// This Gen a Random Number betwwen 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// This Gen a Random Dice Img String Between dice1.png to dice6.png 
var randomDiceImage = "dice" + randomNumber1 + ".png";

// This Gen Combines our Dice String with Images to GEn a Random Image SRC 
var randomImageSource = "images/" + randomDiceImage;

// A variable to select our img EventTarget, using the document.querySelectorAll 
var image1 = document.querySelectorAll("img")[0];

// Changing the Player-1 Image Src using the setAttribute 
image1.setAttribute("src", randomImageSource);

// ------------------------- The JavaScript Code to Randomly Change the Dice Image of Player-2 -----------------------------

// This is a Random Number Gen that Gen Num Between 1 to 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// This Gen a Random Dice Img String Between dice1.png to dice6.png 
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

// This Gen Combines our Dice String with Images to GEn a Random Image SRC 
var randomImageSource2 = "images/" + randomDiceImage2;

// A variable to select our img EventTarget, using the document.querySelectorAll 
var image2 = document.querySelectorAll("img")[1];

// Changing the Player-2 Image Src using the setAttribute 
image2.setAttribute("src", randomImageSource2);

// Changing the h1 (Title of our webpage) based on conditions

// If Player-1 Wins 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

// If Player-2 Wins 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}

// If its a Draw 
else {
    document.querySelector("h1").innerHTML = "🚩 Its a Draw! 🚩";
}