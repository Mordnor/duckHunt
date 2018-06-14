
// Main variables
var mainElmt = document.getElementById("content");
var imgDuck = document.createElement("img");
imgDuck.src = "patrrick-decoupe.png"
// Style
mainElmt.style.position = "relative";
mainElmt.style.height = "100vh";
// divDuck.style.backgroundColor = "red";
imgDuck.style.width = "150px";
imgDuck.style.height = "auto";
imgDuck.style.position = "absolute";
imgDuck.style.transition = "1s"

//appendChild
mainElmt.appendChild(imgDuck);

// Function

window.setInterval(movingDuck, 800)

function movingDuck() {
    imgDuck.style.left = Math.random()*90 + "%"
    imgDuck.style.top = Math.random()*90 + "%"
}
