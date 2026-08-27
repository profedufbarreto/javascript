"use strict";
const campoNome = document.getElementById("campoNome");
const campoSobrenome = document.getElementById("campoSobrenome");
const btnConcatenar = document.getElementById("btnConcatenar");
const campoTexto = document.getElementById("campoTexto");
const concatenar = () => {
    const nome = campoNome.value;
    const sobrenome = campoSobrenome.value;
    const frase = `Seja bem-vindo ${nome} ${sobrenome}!!`;
    campoTexto.innerText = frase;
};
btnConcatenar.addEventListener("click", concatenar);
