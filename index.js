const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnSomar = document.getElementById("btnSomar");
const resultado = document.getElementById("resultado");

    const resolver = () =>{
        const n1 = Number(num1.value);
        const n2 = Number(num2.value);

        const soma = n1 + n2;

        resultado.innerText = `O resultado é: ${soma}!`;
    }

    btnSomar.addEventListener("click", resolver);