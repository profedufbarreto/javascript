let tabuada = 6;
let mult = 10;
let resultado;

while(mult >= 0){
    resultado = mult * tabuada;
    console.log(`O resultado de ${tabuada} * ${mult} é: ${resultado}.`);
    
    mult = mult - 1;
}