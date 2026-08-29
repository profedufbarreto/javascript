"use strict";
const campoIdade = document.getElementById("campoIdade");
const btnCalcular = document.getElementById("btnCalcular");
const campoResultado = document.getElementById("campoResultado");
const maiorIdade = () => {
    const idade = Number(campoIdade.value);
    if (idade >= 18) {
        campoResultado.innerText = `Você tem ${idade} anos e é maior de idade!`;
    }
    else {
        campoResultado.innerText = `Você tem ${idade} anos e é menor de idade!`;
    }
};
btnCalcular.addEventListener("click", maiorIdade);
