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

    campoH2.style.backgroundColor = "blue";
    campoH2.style.color = "white";
    campoH2.style.padding = "50px";
    campoH2.style.borderRadius = "45px";
    campoH2.style.border = "3px solid black";
    campoH2.style.fontSize = "36px";

    }

    btnClicar?.addEventListener("click", alterar);