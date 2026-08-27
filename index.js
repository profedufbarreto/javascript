const titulo = document.getElementById("titulo");
const campoCor = document.getElementById("campoCor");
const btnMudarCor = document.getElementById("btnMudarCor");
const btnMudarFundo = document.getElementById("btnMudarFundo");
const btnMudarPadding = document.getElementById("btnMudarPadding");
const campoPadding = document.getElementById("campoPadding");

    const alterarCorTexto = () => {
        const corDigitada = campoCor.value;

        titulo.style.color = corDigitada;
    };

    const padding = () => {
        const qtdPadding = Number(campoPadding.value);
        titulo.style.padding = `${qtdPadding}px`;
    }

    function alterarCorFundo(){
        const corDigitada = campoCor.value;

        titulo.style.backgroundColor = corDigitada;
        titulo.style.padding = "10px";
    };



    btnMudarCor.addEventListener("click", alterarCorTexto);
    btnMudarFundo.addEventListener("click", alterarCorFundo);
    btnMudarPadding.addEventListener("click", padding);