var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Disp = document.getElementById("p1Display");
var p2Disp = document.getElementById("p2Display");
var numInput = document.querySelector("input");
var winningScoreDisp = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Disp.classList.add("winner");
            gameOver = true;
        }
        p1Disp.textContent = p1Score;
    }
   
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Disp.classList.add("winner");
            gameOver = true;
        }
        p2Disp.textContent = p2Score;
    }
});

resetButton.addEventListener("click",function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Disp.textContent = 0;
    p2Disp.textContent = 0;
    p1Disp.classList.remove("winner");
    p2Disp.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change",function(){
    winningScoreDisp.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});