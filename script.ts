const campoH1 = document.getElementById("campoH1") as HTMLHeadingElement;
const campoH2 = document.getElementById("campoH2") as HTMLHeadingElement;
const campoResultado = document.getElementById("campoResultado") as HTMLHeadingElement;
const btnClicar = document.getElementById("btnClicar");

const alterar = (): void => {
    campoResultado.innerText = "Olá mundo!";
    campoResultado.style.backgroundColor = "red";
    campoResultado.style.color = "white";
    campoResultado.style.border = "3px solid black";
    campoResultado.style.padding = "50px";
    campoResultado.style.fontSize = "54px";
}

    btnClicar.addEventListener("click", alterar);