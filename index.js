// Dice Player 1
let randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6)+1;
let image1 = "images/dice"+ randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src",image1);

// Dice Player 2
let randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6)+1;
let image2 = "images/dice"+ randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",image2);

// H1 Winner Announcement 
function drawWinner(){
if (randomNumber2 === randomNumber1 ){
    document.querySelector("h1").textContent ="Draw!";
}
else if (randomNumber2 > randomNumber1 ){
    document.querySelector("h1").textContent ="Player 2 is Victorious! 🚩";
}
else {
    document.querySelector("h1").textContent ="🚩 Player 1 Wins!";
}
}
drawWinner()