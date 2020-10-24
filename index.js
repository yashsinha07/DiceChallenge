//First Image Randomizer
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
const imageName1 = "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", "images/" + imageName1);

//Second Image Randomizer
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
const imageName2 = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", "images/" + imageName2);

//Condition to check who won
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}