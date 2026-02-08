let num1 = 12;
let num2 = 2;
let preco = 16.99;
let nome = "Eduardo";
let cidades = ["Montenegro", "Pareci Novo", "São Sebastião do Caí", "Capela de Santana"];
let soma = num1 + num2;

console.log("O resultado da soma é " + soma + ".");
console.log(`O resultado da soma é ${soma}.`);
console.log(`O preço do item é de R$ ${preco}`);

for(let letras of nome){
    console.log(letras);
}

for(let cidade of cidades){
    console.log(cidade);
}