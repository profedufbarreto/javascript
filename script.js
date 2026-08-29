"use strict";
const campoIdade = document.getElementById("campoIdade");
const btnCalcular = document.getElementById("btnCalcular");
const campoResultado = document.getElementById("campoResultado");
const verificarIdade = () => {
    const idade = Number(campoIdade.value);
    if (campoIdade.value.trim() === "") {
        campoResultado.innerText = "Por favor, digite um número!";
        campoResultado.style.color = "red";
        campoResultado.style.border = "2px solid black";
        campoResultado.style.padding = "30px";
        campoResultado.style.margin = "20px";
        return;
    }
    if (idade < 0) {
        campoResultado.innerText = "Idade inválida!";
        campoResultado.style.color = "red";
        campoResultado.style.border = "2px solid black";
        campoResultado.style.padding = "30px";
        campoResultado.style.margin = "20px";
    }
    else if (idade < 16) {
        campoResultado.innerText = "Você é menor de idade. Não pode votar nem dirigir.";
        campoResultado.style.color = "darkred";
    }
    else if (idade >= 16 && idade < 18) {
        campoResultado.innerText = "Voto opcional. Ainda não pode dirigir.";
        campoResultado.style.color = "orange";
    }
    else {
        campoResultado.innerText = "Maior de idade! Voto obrigatório e pode dirigir!";
        campoResultado.style.color = "green";
        campoResultado.style.border = "2px solid black";
        campoResultado.style.borderRadius = "20px";
        campoResultado.style.padding = "25px";
        campoResultado.style.margin = "15px";
    }
};
btnCalcular.addEventListener("click", verificarIdade);
