//Canette noir 
document.getElementById("img__black").addEventListener("click", changeBlack);
function changeBlack(){
  document.querySelector(".picture-large").innerHTML = `<img src="./RESSOURCES/IMAGES/noir-grand.png" alt="canette couleur noir" id="img__black">`;
  document.querySelector(".container__right").style.backgroundColor = "black";
  document.querySelectorAll(".img__bottom").forEach(element => element.addEventListener("click", spanVisible));
}

// faire apparaitre le trait noir en dessous des images cliquées.

function spanVisible(){
  this.children[2].style.opacity = "1";
}

// Canette bleue 1
document.getElementById("img__blue__one").addEventListener("click", changeBlueOne);
function changeBlueOne(){
  document.querySelector(".picture-large").innerHTML = `<img src="./RESSOURCES/IMAGES/bleu-grand2.png" alt="canette couleur bleu">`;
  document.querySelector(".container__right").style.backgroundColor = " rgb(22, 22, 136)";
  document.querySelectorAll(".img__bottom").forEach(element => element.addEventListener("click", spanVisible));
  
}

// // Canette jaune
document.getElementById("img__yellow").addEventListener("click", changeYellow);
function changeYellow(){
  document.querySelector(".picture-large").innerHTML = `<img src="./RESSOURCES/IMAGES/jaune-grand.png" alt="canette couleur jaune" id="large__image">`;
  document.querySelector(".container__right").style.backgroundColor = " #c49f40";
}

//Canette bleue 2
document.getElementById("img__blue__two").addEventListener("click", changeBlueTwo);
function changeBlueTwo(){
  document.querySelector(".picture-large").innerHTML = `<img src="./RESSOURCES/IMAGES/bleu-grand.png" alt="canette couleur bleu">`;
  document.querySelector(".container__right").style.backgroundColor = " rgb(22, 22, 136)";
  document.querySelectorAll(".img__bottom").forEach(element => element.addEventListener("click", spanVisible));
  
}

// overlay canette bleue 1
document.querySelector(".overlay__bleu__one").addEventListener("click", overlayHiddenblueOne);
function overlayHiddenblueOne(){
  this.style.opacity = "0";
  changeBlueOne();
}

// overlay canette yellow
document.querySelector(".overlay__jaune").addEventListener("click", overlayHiddenYellow);
function overlayHiddenYellow(){
  this.style.opacity = "0";
  changeYellow();
}

// overlay canette bleue 2
document.querySelector(".overlay__bleu__two").addEventListener("click", overlayHiddenblueTwo);
function overlayHiddenblueTwo(){
  this.style.opacity = "0";
  changeBlueTwo();
}

// overlay canette black
document.querySelector(".overlay__black").addEventListener("click", overlayHiddenblack);
function overlayHiddenblack(){
  this.style.opacity = "0";
  changeBlack();
}

// document.querySelectorAll(".over").forEach(element => element.addEventListener("mouseover", mouseover));
// function mouseover(){
//  this.nextElementSibling.nextElementSibling.style.opacity = "1";
// }

// document.querySelectorAll(".over").forEach(element => element.addEventListener("mouseout", mouseout));
// function mouseout(){
//  this.nextElementSibling.nextElementSibling.style.opacity = "0";
// }