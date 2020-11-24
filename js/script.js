let  nav1 = document.getElementsByClassName("nav")[0];
let  nav2 = document.getElementsByClassName("nav")[1];
let  nav3 = document.getElementsByClassName("nav")[2];

let pageActuel = window.location.pathname.split("/");
pageActuel = pageActuel[pageActuel.length - 1];

switch(pageActuel) {
    case "index.html": case "palegger.github.io": {
        nav1.style.borderBottom = "3px solid white";
        nav1.style.color = "white";
        navEvent(0);
        break;
    }
    case "presentation.html": {
        nav2.style.borderBottom = "3px solid white";
        nav2.style.color = "white";
        navEvent(1);
        break;
    }
    case "contacts.html": {
        nav3.style.borderBottom = "3px solid white";
        nav3.style.color = "white";
        navEvent(2);
        break;
    }
}

function navEvent (actuel) {

    for(let i = 0; i < 3; i++) {
        if(i != actuel) {
        (document.getElementsByClassName("nav")[i]).addEventListener("mouseover", navOver);
        (document.getElementsByClassName("nav")[i]).addEventListener("mouseout", navLeft);
        (document.getElementsByClassName("nav")[i]).addEventListener("click", navclick);
        }
    }
}

function navOver() {
    this.style.borderBottom = "3px solid #555555";
}

function navLeft() {
    this.style.borderBottom = "0px solid white";
    this.style.color = "#555555";
}

function navclick() {
    this.style.borderBottom = "3px solid white";
    this.style.color = "white";
}