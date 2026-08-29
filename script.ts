const campoNum1 = document.getElementById("campoNum1") as HTMLInputElement;
const campoNum2 = document.getElementById("campoNum2") as HTMLInputElement;
const btnMultiplicar = document.getElementById("btnMultiplicar") as HTMLButtonElement;
const campoResultado = document.getElementById("campoResultado") as HTMLHeadingElement;

    const resolver = (): void => {
        const n1 = Number(campoNum1.value);
        const n2 = Number(campoNum2.value);

        const multiplicar = n1 * n2;

        campoResultado.innerText = `O resultado de ${n1} x ${n2} é: ${multiplicar}.`;
    }

btnMultiplicar.addEventListener("click", resolver);