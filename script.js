"use strict";
const campoAlterado = document.getElementById("campoAlterado");
const campoInput = document.getElementById("campoInput");
const btnAlterar = document.getElementById("btnAlterar");
const btnStandart = document.getElementById("btnStandart");
const textoInicial = campoAlterado.innerText;
const standart = () => {
    campoAlterado.style.color = "";
    campoAlterado.style.backgroundColor = "";
    campoAlterado.style.padding = "";
    campoAlterado.style.border = "";
    campoAlterado.style.borderRadius = "";
    campoAlterado.innerText = textoInicial;
    campoInput.value = "";
};
const alterar = () => {
    if (campoInput.value.trim() !== "") {
        campoAlterado.innerText = campoInput.value;
    }
    campoAlterado.style.color = "#ffffff";
    campoAlterado.style.backgroundColor = "#2b5278";
    campoAlterado.style.padding = "15px";
    campoAlterado.style.border = "5px solid #000000";
    campoAlterado.style.borderRadius = "8px";
    campoAlterado.style.textAlign = "center";
};
btnAlterar.addEventListener("click", alterar);
btnStandart.addEventListener("click", standart);
