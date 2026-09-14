"use strict";
const campoResultado = document.getElementById("campoResultado");
const campoCor = document.getElementById("campoCor");
const campoSize = document.getElementById("campoSize");
const btnFormatar = document.getElementById("btnFormatar");
const formatar = () => {
    campoResultado.innerText = "Esse texto mudou";
    const color = campoCor.value;
    const size = Number(campoSize.value);
    campoResultado.style.color = `${color}`;
    campoResultado.style.fontSize = `${size}px`;
};
btnFormatar.addEventListener("click", formatar);
