const diaDaSemana = document.getElementById("diaDaSemana");
const opcao = diaDaSemana.value;
const campoTexto = document.getElementById("campoTexto");

    const dia = () => {

        switch(opcao){
            case "domingo":
                campoTexto.innerText = `Hoje é ${opcao}!`;
                break;
            case "segunda":
                campoTexto.innerText = `Hoje é ${opcao}!`;
                break;
            case "terca":
                campoTexto.innerText = `Hoje é ${opcao}!`;
                break;
            case "quarta":
                campoTexto.innerText = `Hoje é ${opcao}!`;
                break;
            case "quinta":
                campoTexto.innerText = `Hoje é ${opcao}!`;
                break;
            case "sexta":
                campoTexto.innerText = `Hoje é ${opcao}!`;
                break;
            case "sabado":
                campoTexto.innerText = `Hoje é ${opcao}!`;
                break;
            default:
                campoTexto.innerText = "Opção inválida!";
        }
    }
    diaDaSemana.addEventListener("change", dia);
    