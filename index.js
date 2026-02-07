let idade = 38;

if(idade < 0){
    console.log('Idade inválida!');
}else if(idade === 0){
    console.log(`Criança de ${idade} anos, recém nascida.`);
}else if(idade <= 5){
    console.log(`Criança de ${idade} anos.`);
}else if(idade <= 12){
    console.log(`Pré-adolescente de ${idade} anos.`);
}else if(idade <= 18){
    console.log(`Adolescente de ${idade} anos.`);
}else if(idade <=60){
    console.log(`Adulto de ${idade} anos.`);
}else{
    console.log(`Sênior de ${idade} anos.`);
}