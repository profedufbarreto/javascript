const campoPreco = document.getElementById("campoPreco");
const campoQtd = document.getElementById("campoQtd");
const btnCalcular = document.getElementById("btnCalcular");
const txtResultado = document.getElementById("txtResultado");

    const calcularTotal = () => {
        const preco = Number(campoPreco.value);
        const quantidade = Number(campoQtd.value);

        const total = preco * quantidade;

        txtResultado.innerText = `Total: R$ ${total.toFixed(2)}`;
    };

    btnCalcular.addEventListener("click", calcularTotal);