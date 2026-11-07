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
const repetir = () => {
    let resultado = "";
    for (let i = 0; i < 1000; i++) {
        resultado += "\nNii, você é lindaaa!!! ";
    }
    campoResultado.innerText = resultado;
};
btnFormatar.addEventListener("click", formatar);
btnFormatar.addEventListener("click", repetir);
