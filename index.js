function soma(a, b){
    return a + b;
}

function subt(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

opcao = 3;

switch(opcao){
    case 1:
        resultado = soma(5, 5);
        console.log(`O resultado é ${resultado}.`);
        break;
    case 2:
        resultado = subt(5, 5);
        console.log(`O resultado é ${resultado}.`);
        break;
    case 3:
        resultado = mult(5, 5);
        console.log(`O resultado é ${resultado}.`);
        break;
    case 4:
        resultado = div(5, 5);
        console.log(`O resultado é ${resultado}.`);
        break;
    default:
        console.log(`Valor inexistente!`);
}


