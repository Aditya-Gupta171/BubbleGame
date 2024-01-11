var timer=60;
var score=0;
function bubblebanao(){
    var pichlavalue="";

for(var i=1;i<=102;i++){
    var rndmnum=Math.floor(Math.random()*10);
    pichlavalue+=`<div class="bubble">${rndmnum}</div>`;
}
document.querySelector("#pbtm").innerHTML=pichlavalue;
}
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
 function getnewhit(){
    var hitrunner=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrunner;
 }
function increasescore(){
    
}
bubblebanao();
runtimer();
getnewhit();