
// Main variables
var mainElmt = document.getElementById("content");
var imgDuck = document.createElement("img");
var scoreText = document.getElementById("score");
document.body.style.backgroundImage = "url(patrrick-font.jpeg)"

ducksImg = ["patrrick-decoupe.png", "johnny_hallyday_002.jpg"];
imgDuck.src = ducksImg[0];
// Style
mainElmt.style.position = "relative";
mainElmt.style.height = "100vh";
imgDuck.style.width = "150px";
imgDuck.style.height = "auto";
imgDuck.style.position = "absolute";
imgDuck.style.transition = "1s"

//appendChild
mainElmt.appendChild(imgDuck);
// Function

window.setInterval(movingDuck, 1000);

function movingDuck() {
    imgDuck.style.left = Math.random()*90 + "%"
    imgDuck.style.top = Math.random()*90 + "%"
}
var score = 0;
scoreText.innerHTML = "Votre score est de :" + score
function shootDuck(){
    console.log("click shoot!");
    score++;
    imgDuck.src = ducksImg[ score % ducksImg.length];

    scoreText.innerHTML =  "Votre score est de :" + score;
    // window.setInterval(movingDuck, 100);
}


imgDuck.addEventListener('click', shootDuck );
