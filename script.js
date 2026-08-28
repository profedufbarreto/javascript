"use strict";
const campoTabuada = document.getElementById("campoTabuada");
const btnTabuada = document.getElementById("btnTabuada");
const campoResultado = document.getElementById("campoResultado");
const resolver = () => {
    const tab = Number(campoTabuada.value);
    let resultadoFinal = "";
    for (let i = 0; i <= 10; i++) {
        const resposta = i * tab;
        resultadoFinal += `${tab} x ${i} = ${resposta}\n`;
    }
    campoResultado.innerText = resultadoFinal;
};
btnTabuada.addEventListener("click", resolver);
