var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Disp = document.getElementById("p1Display");
var p2Disp = document.getElementById("p2Display");
var p1Score = 0;

p1Button.addEventListener("click", function(){
    p1Score++;
    console.log(p1Score);
    p1Disp.textContent = p1Score;
});