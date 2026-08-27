const campoNum1 = document.getElementById("campoNum1");
const campoNum2 = document.getElementById("campoNum2");
const select = document.getElementById("select");
const campoResultado = document.getElementById("campoResultado");

    const calcular = () => {
        const n1 = Number(campoNum1.value);
        const n2 = Number(campoNum2.value);

        const opcao = select.value;

        switch(opcao){
            case 'soma':
                const soma = n1 + n2;
                campoResultado.innerText = `O resultado da soma é: ${soma}.`;
                break;
            case 'subtracao':
                const subtracao = n1 - n2;
                campoResultado.innerText = `O resultado da subtração é: ${subtracao}.`;
                break;
            case 'multiplicacao': 
                const multiplicacao = n1 * n2;
                campoResultado.innerText = `O resultado da multiplicação é: ${multiplicacao}.`;
                break
            case 'divisao':
                if(n2 <= 0){
                    campoResultado.innerText = "Não pode dividir por 0";
                }else{
                    const divisao = n1 / n2;
                    campoResultado.innerText = `O resultado da divisão é: ${divisao}.`;
                }
                break;
            default:
                campoResultado.innerText = "Opção inválida!";
                
        }
    }

select.addEventListener("change", calcular);

    