const campoResultado = document.getElementById("campoResultado") as HTMLHeadingElement;
const campoCor = document.getElementById("campoCor") as HTMLInputElement;
const campoSize = document.getElementById("campoSize") as HTMLInputElement;
const btnFormatar = document.getElementById("btnFormatar") as HTMLButtonElement;

    const formatar = (): void => {

        const color = campoCor.value;
        const size = Number(campoSize.value);

        campoResultado.innerHTML = "Esse texto <b>mudou!!</b>";

        campoResultado.style.color = `${color}`;
        campoResultado.style.fontSize = `${size}px`;
        campoResultado.style.border = "3px solid black";
        campoResultado.style.borderRadius = "35px";
        campoResultado.style.textAlign = "center";
    }

    btnFormatar.addEventListener("click", formatar);