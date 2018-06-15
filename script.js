
// Main variables
var mainElmt = document.getElementById("content");
var scoreText = document.getElementById("score");
document.body.style.backgroundImage = "url(patrrick-font.jpeg)"
ducksImg = ["patrrick-decoupe.png", "johnny_hallyday_002.png", "gege.png"];
var nbDucks  = 12;
for (var i = 0; i < nbDucks; i++) {
    var imgDuck = document.createElement("img");
    imgDuck.src = ducksImg[0];
    imgDuck.className = "duck";
    // Style
    mainElmt.style.position = "relative";
    mainElmt.style.height = "100vh";
    imgDuck.style.width = "250px";
    imgDuck.style.height = "auto";
    imgDuck.style.position = "absolute";
    var startTime = 5;
    imgDuck.style.transition = startTime + "s ease"
    mainElmt.appendChild(imgDuck);

    imgDuck.addEventListener('click', shootDuck );
}
var ducks = document.getElementsByClassName("duck");
function movingDuck() {
    console.log(ducks);
    for (var i = 0; i < ducks.length; i++) {
        ducks[i].style.left = Math.random()*90 + "%"
        ducks[i].style.top = Math.random()*90 + "%"
    }
    if (score > 0){
        scoreText.style.color = "rgb(" + 255*Math.round(Math.random()) + ',' + 255*Math.round(Math.random()) + ',' + 255*Math.round(Math.random())+ ")";
    }
}

window.setInterval(movingDuck, 750);

//appendChild
// Function


var score = 0;
scoreText.innerHTML = "Votre score est de : " + score
function shootDuck(){
    console.log("click shoot!");
    score++;
    scoreText.innerHTML =  "Votre score est de : " + score;
    this.src = ducksImg[ score % ducksImg.length];
    var transitionStr  = ["all ", " ease 0s"];
    console.log(this.style.transition);
    var divisTime = 2;
    if(startTime - score/2 > 0){
        for (var i = 0; i < ducks.length; i++) {
            ducks[i].style.transition = startTime - score/2 + "s";
        }
    }else{
        this.style.display = "none"
    }
    if (score >= nbDucks + startTime*divisTime -1){
        console.log(score);
        document.body.style.backgroundImage = "url(patrrick.jpeg)"
    }
    // window.setInterval(movingDuck, 100);
}
