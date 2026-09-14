const campoResultado = document.getElementById("campoResultado") as HTMLHeadingElement;
const campoCor = document.getElementById("campoCor") as HTMLInputElement;
const campoSize = document.getElementById("campoSize") as HTMLInputElement;
const btnFormatar = document.getElementById("btnFormatar") as HTMLButtonElement;

    const formatar = (): void => {

        campoResultado.innerText = "Esse texto mudou";
        
        const color = campoCor.value;
        const size = Number(campoSize.value);

        campoResultado.style.color = `${color}`;
        campoResultado.style.fontSize = `${size}px`;
        
    }

    btnFormatar.addEventListener("click", formatar);