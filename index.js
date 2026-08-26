const txtMensagem = document.getElementById("txtMensagem");
const btnGerar = document.getElementById("btnGerar");
const txtRestultado = document.getElementById("txtResultado");


const mensage = () => {
    const texInput = txtMensagem.value; 
    txtRestultado.innerText = `${texInput}`;
}

btnGerar.addEventListener("click", mensage);