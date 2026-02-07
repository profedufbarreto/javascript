let num = 7;
let valor = 19.99;

let total = num * valor;

if(total >= 150){
    console.log(`O valor total é de R$ ${total.toFixed(2)}.`);
    console.log("Gastos excessivos!!")
}else{
    console.log(`O valor total é de R$ ${total.toFixed(2)}`)
    console.log('Gastos controlados.');
}
