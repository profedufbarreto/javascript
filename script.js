"use strict";
const campoNum1 = document.getElementById("campoNum1");
const campoNum2 = document.getElementById("campoNum2");
const btnCalcular = document.getElementById("btnCalcular");
const campoResultado = document.getElementById("campoResultado");
const somar = () => {
    const num1 = Number(campoNum1.value);
    const num2 = Number(campoNum2.value);
    const soma = num1 + num2;
    campoResultado.innerText = `O resultado é: ${soma}!!`;
};
btnCalcular.addEventListener("click", somar);
