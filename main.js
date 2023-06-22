let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvil = document.getElementById("nouvil");
let main = document.querySelector(".main");

window.onscroll= function (){
        let value = scrollY;

        stars.style.left = value + "px";
        moon.style.top = value * 4 + "px";
        mountains3.style.top = value * 2.5 + "px";
        mountains4.style.top = value * 2 + "px";
        river.style.left = value * 4  + "px";
        river.style.top = value * 0.5 + "px";
        boat.style.left = value * 4 + "px";
        nouvil.style.fontSize= value * 0.5  + "px";
        if ( scrollY >= 130 ){
            nouvil.style.fontsize=130 + "px"
            nouvil.style.position="fixed";
        if (scrollY >= 375 ) {
            nouvil.style.display="none";
        } else {
            nouvil.style.display="block";
        }
        if (scrollY >= 222) {
            main.style.background="linear-gradient(rgb(0, 44, 76),rgb(0, 99, 132))";
        }else {
            main.style.background="linear-gradient(rgb(44, 0, 44),#100010)";
    }  
} 
}

