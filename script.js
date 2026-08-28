"use strict";
const campoNum = document.getElementById("campoNum");
const btnImprimir = document.getElementById("btnImprimir");
const campoResultado = document.getElementById("campoResultado");
const enquanto = () => {
    const n = Number(campoNum.value);
    let resultadoFinal = "";
    for (let i = n; i <= 10; i++) {
        resultadoFinal += `${i} `;
    }
    campoResultado.innerText = resultadoFinal;
};
btnImprimir.addEventListener("click", enquanto);
