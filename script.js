"use strict";
const campoNum1 = document.getElementById("campoNum1");
const campoNum2 = document.getElementById("campoNum2");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const campoResultado = document.getElementById("campoResultado");
const resolver = () => {
    const n1 = Number(campoNum1.value);
    const n2 = Number(campoNum2.value);
    const multiplicar = n1 * n2;
    campoResultado.innerText = `O resultado de ${n1} x ${n2} é: ${multiplicar}.`;
};
btnMultiplicar.addEventListener("click", resolver);
