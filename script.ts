const campoNome = document.getElementById("campoNome") as HTMLInputElement;
const campoSobrenome = document.getElementById("campoSobrenome") as HTMLInputElement
const btnConcatenar = document.getElementById("btnConcatenar") as HTMLButtonElement;
const campoTexto = document.getElementById("campoTexto") as HTMLHeadingElement;

    const concatenar = (): void =>{
        const nome = campoNome.value;
        const sobrenome = campoSobrenome.value;

        const frase = `Seja bem-vindo ${nome} ${sobrenome}!!`;

        campoTexto.innerText = frase;
    }

    btnConcatenar.addEventListener("click", concatenar);