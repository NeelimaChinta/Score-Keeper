var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningscoredisplay = document.querySelector("p span")
var p1Score=0;
var p2Score=0;
var gameover= false;
var winningscore= 5;


p1Button.addEventListener("click",function(){
if(!gameover){
    p1Score++;
    if(p1Score === winningscore){
        p1Display.classList.add("winner");
        gameover=true;
    }
}
p1Display.textContent = p1Score;
});

p2Button.addEventListener("click",function(){
    if(!gameover){
        p2Score++;
        if(p2Score === winningscore){
            p2Display.classList.add("winner");
            gameover=true;
        }
    }
    p2Display.textContent = p2Score;
    });

    resetButton.addEventListener("click",function(){
      reset();
     });

     function reset(){
        p1Score=0;
        p2Score=0;
        p1Display.textContent=0;
        p2Display.textContent=0;
        p1Display.classList.remove("winner");
        p2Display.classList.remove("winner");
        gameover=false;
     }

    numInput.addEventListener("change",function(){
        winningscoredisplay.textContent = numInput.value;
        winningscore = Number(numInput.value);
        reset();
    });