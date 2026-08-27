const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const btnSomar = document.getElementById("btnSomar") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLHeadingElement;

const somar = (): void => {
    const n1: number = Number(num1.value);
    const n2: number = Number(num2.value);

    const total: number = n1 + n2;

    resultado.innerText = `Resultado: ${total}.`;
};

btnSomar.addEventListener("click", somar);