const campoTabuada = document.getElementById("campoTabuada") as HTMLInputElement;
const btnTabuada = document.getElementById("btnTabuada") as HTMLButtonElement;
const campoResultado = document.getElementById("campoResultado") as HTMLHeadingElement;

    const resolver = (): void => {
        const tab = Number(campoTabuada.value);
        let resultadoFinal = "";

        for(let i = 0; i <= 10; i++){
            const resposta = i * tab;
            
            resultadoFinal += `${tab} x ${i} = ${resposta}\n`;
        }

        campoResultado.innerText = resultadoFinal;
        
    }

    btnTabuada.addEventListener("click", resolver);