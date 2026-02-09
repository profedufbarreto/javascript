let pessoas = [
    {nome: "Eduardo", idade: 38, cidade: "Monentegro"},
    {nome: "Fernanda", idade: 46, cidade: "Montenegro"},
    {nome: "Tânia", idade: 73, cidade: "Montenegro"}
];

for(let pessoa of pessoas){
    console.log(`${pessoa.nome} - ${pessoa.idade} - ${pessoa.cidade}`);
}