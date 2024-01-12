var timer = 60;
var score = 0;
var hitrunner = 0;
function bubblebanao() {
    var pichlavalue = "";
    for (var i = 1; i <= 102; i++) {
        var rndmnum = Math.floor(Math.random() * 10);
        pichlavalue += `<div class="bubble">${rndmnum}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = pichlavalue;
}
function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER <h1>`;
        }
    }, 1000);
}
function getNewHit() {
    hitrunner = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").textContent = hitrunner;
}
function increasescore() {
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

document.querySelector("#pbtm")
    .addEventListener("click", function (dets) {
        var clickednum = (Number(dets.target.textContent));
        if (clickednum === hitrunner) {
            increasescore();
            bubblebanao();
            getNewHit();
        }
    })

runtimer();
bubblebanao();
getNewHit();