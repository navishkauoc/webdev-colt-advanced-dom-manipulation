var butt = document.querySelector("body");
butt.style.background = "yellow";

butt.addEventListener("click",changeBgroundClr);

//var isWhite = "yellow";

function changeBgroundClr(){
    if(butt.style.background == "yellow"){
        butt.style.background = "blue";
    } else{
        butt.style.background = "yellow";
    }
}