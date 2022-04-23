//console.log("Hello")
// jAVASCRIPT File
let menuBar=document.querySelector(".menuBar");
let ModeChanger = document.querySelector(".ModeBtn")
//console.log(menuBar);
//console.log(ModeChanger);
function menuToggler() {
   menuBar.classList.toggle("menuBar-height")
}
ModeChanger.onclick= function() {
    ModeChanger.classList.toggle("toggleOnOff");
    document.body.classList.toggle("dark-mode");
}
