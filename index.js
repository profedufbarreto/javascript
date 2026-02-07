const dia = "segunda";

switch (dia){
    case "Segunda":
    case "segunda":
    case "SEGUNDA":
        console.log("Segunda-feira");
        break;
    
    case "Terça":
    case "terça":
    case "TERÇA":
        console.log("Terça-feira");
        break;
    default:
        console.log("Valor inexistente.");
}