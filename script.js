"use strict";
const campoH1 = document.getElementById("campoH1");
const campoH2 = document.getElementById("campoH2");
const campoResultado = document.getElementById("campoResultado");
const btnClicar = document.getElementById("btnClicar");
const alterar = () => {
    campoResultado.innerText = "Olá mundo!";
    campoResultado.style.backgroundColor = "red";
    campoResultado.style.color = "white";
    campoResultado.style.border = "3px solid black";
    campoResultado.style.padding = "50px";
    campoResultado.style.fontSize = "54px";
};
btnClicar?.addEventListener("click", alterar);
