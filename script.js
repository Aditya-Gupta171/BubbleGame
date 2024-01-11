function bubblebanao(){
    var pichlavalue="";

for(var i=1;i<=102;i++){
    var rndmnum=Math.floor(Math.random()*10);
    pichlavalue+=`<div class="bubble">${rndmnum}</div>`;
}
document.querySelector("#pbtm").innerHTML=pichlavalue;
}

var timer=4;
function runtimer(){
  var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent=timer;
        }
        else{
            clearInterval(timerint);
        }
    },1000);}

bubblebanao();
runtimer();
