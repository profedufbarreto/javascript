let idade = 38;

if(idade <= 0){
    console.log("Idade inválida!");
}else if(idade <= 10){
    console.log(`Você tem ${idade} e é uma criança!`);
}else if(idade <= 14){
    console.log(`Você tem ${idade} e é um pré-adolescente!`);
}else if(idade <= 17){
    console.log(`Você tem ${idade} e é adolescente!`);
}
else if(idade <= 65){
    console.log(`Você tem ${idade} e é adulto!`);
}else{
    console.log(`Você tem ${idade} e é sênior!`);
}