"use strict";
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnSomar = document.getElementById("btnSomar");
const resultado = document.getElementById("resultado");
const somar = () => {
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    const total = n1 + n2;
    resultado.innerText = `Resultado: ${total}.`;
};
btnSomar.addEventListener("click", somar);
