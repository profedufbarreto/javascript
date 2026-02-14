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

class Gato extends Animal{
    emitirSom(){
        console.log("Miau!");
    }
}

const dog = new Cachorro("Rex");
dog.emitirSom();

const cat = new Gato("Lito");
cat.emitirSom();