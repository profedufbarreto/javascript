const campoIdade = document.getElementById("campoIdade") as HTMLInputElement;
const btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement;
const campoResultado = document.getElementById("campoResultado") as HTMLHeadingElement;

    const maiorIdade = ():void => {
        const idade = Number(campoIdade.value);

        if(idade >= 18){
            campoResultado.innerText = `Você tem ${idade} anos e é maior de idade!`;
        }else{
            campoResultado.innerText = `Você tem ${idade} anos e é menor de idade!`;
        }
    };

    btnCalcular.addEventListener("click", maiorIdade);