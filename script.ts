const campoAlterado = document.getElementById("campoAlterado") as HTMLHeadingElement;
const campoInput = document.getElementById("campoInput") as HTMLInputElement;
const btnAlterar = document.getElementById("btnAlterar") as HTMLButtonElement;
const btnStandart = document.getElementById("btnStandart") as HTMLButtonElement;

const textoInicial = campoAlterado.innerText;

    const standart = (): void => {
        campoAlterado.style.color = "";
        campoAlterado.style.backgroundColor = "";
        campoAlterado.style.padding = "";
        campoAlterado.style.border = "";
        campoAlterado.style.borderRadius = "";

        campoAlterado.innerText = textoInicial;
        campoInput.value = "";
    };

    const alterar = (): void => {
        if(campoInput.value.trim() !== ""){
            campoAlterado.innerText = campoInput.value;
        }

        campoAlterado.style.color = "#ffffff";
        campoAlterado.style.backgroundColor = "#2b5278";
        campoAlterado.style.padding = "15px";
        campoAlterado.style.border = "5px solid #000000";
        campoAlterado.style.borderRadius = "8px";
        campoAlterado.style.textAlign = "center";
    };

    btnAlterar.addEventListener("click", alterar);
    btnStandart.addEventListener("click", standart);