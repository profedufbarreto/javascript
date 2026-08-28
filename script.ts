const campoNum = document.getElementById("campoNum") as HTMLInputElement;
const btnImprimir = document.getElementById("btnImprimir") as HTMLButtonElement;
const campoResultado = document.getElementById("campoResultado") as HTMLParagraphElement;

    const enquanto = (): void => {
        const n = Number(campoNum.value);
        let resultadoFinal = "";

        for(let i = n; i <= 10; i++){
            resultadoFinal += `${i} `;
        }

        campoResultado.innerText = resultadoFinal;

    }

    btnImprimir.addEventListener("click", enquanto);