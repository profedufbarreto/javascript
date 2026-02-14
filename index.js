class Animal{
    constructor(nome){
        this.nome = nome;
    }
    emitirSom(){
        console.log("Som genérico..");
    }
}
class Cachorro extends Animal{
    emitirSom(){
        console.log("Au au!");
    }
}
const dog = new Cachorro("Rex");
dog.emitirSom();