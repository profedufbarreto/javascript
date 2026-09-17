"use strict";
const campoResultado = document.getElementById("campoResultado");
const campoCor = document.getElementById("campoCor");
const campoSize = document.getElementById("campoSize");
const btnFormatar = document.getElementById("btnFormatar");
const formatar = () => {
    const color = campoCor.value;
    const size = Number(campoSize.value);
    campoResultado.innerHTML = "Esse texto <b>mudou!!</b>";
    campoResultado.style.color = `${color}`;
    campoResultado.style.fontSize = `${size}px`;
    campoResultado.style.border = "3px solid black";
    campoResultado.style.borderRadius = "35px";
    campoResultado.style.textAlign = "center";
};
btnFormatar.addEventListener("click", formatar);
