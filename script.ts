const campoAlterado = document.getElementById("campoAlterado") as HTMLHeadingElement;
const campoInput = document.getElementById("campoInput") as HTMLInputElement;
const btnAlterar = document.getElementById("btnAlterar") as HTMLButtonElement;

    const alterar = (): void => {
        
        if(campoInput.value.trim() !== ""){
            campoAlterado.innerText = campoInput.value;
        }

        campoAlterado.style.color = "#ffffff";
        campoAlterado.style.backgroundColor = "#2b5278";
        campoAlterado.style.padding = "15px";
        campoAlterado.style.border = "2px solid #000000";
        campoAlterado.style.borderRadius = "8px";
    };

    btnAlterar.addEventListener("click", alterar);