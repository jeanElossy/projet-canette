//Canette noir 
document.getElementById("img__black").addEventListener("click", changeBlack);
function changeBlack(){
  document.querySelector(".picture-large").innerHTML = `<img src="./RESSOURCES/IMAGES/noir-grand.png" alt="canette couleur noir" id="img__black">`;
  document.querySelector(".container__right").style.backgroundColor = "black";
  // document.querySelectorAll(".img__bottom span").forEach(element => element.style.opacity = "1");
}
 
// Canette bleue 1
document.getElementById("img__blue__one").addEventListener("click", changeBlueOne);
function changeBlueOne(){
  document.querySelector(".picture-large").innerHTML = `<img src="./RESSOURCES/IMAGES/bleu-grand2.png" alt="canette couleur bleu">`;
  document.querySelector(".container__right").style.backgroundColor = " rgb(22, 22, 136)";
}

// Canette jaune
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
}


