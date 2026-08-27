const campoNum1 = document.getElementById("campoNum1") as HTMLInputElement;
const campoNum2 = document.getElementById("campoNum2") as HTMLInputElement;
const btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement;
const campoResultado = document.getElementById("campoResultado") as HTMLHeadingElement;

    const somar = (): void =>{
        const num1 = Number(campoNum1.value);
        const num2 = Number(campoNum2.value);

        const soma = num1 + num2;

        campoResultado.innerText = `O resultado é: ${soma}!!`;
    }

    btnCalcular.addEventListener("click", somar);