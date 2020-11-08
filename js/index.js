let button = document.getElementsByTagName("button")[0];

button.addEventListener("mouseover", buttonOver);
button.addEventListener("mouseout", buttonLeft);

function buttonOver() {
    button.style.backgroundColor = "#555555";
    button.style.color = "white";
}

function buttonLeft() {
    button.style.backgroundColor = "white";
    button.style.color = "black"; 
}