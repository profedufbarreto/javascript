class Animal{
    constructor(nome){
        this.nome = nome;
    }
    emitirSom(){
        console.log(`${this.nome} faz um som genérico..`);
    }
}

class Cachorro extends Animal{
    emitirSom(){
        console.log(`${this.nome} diz: Au au!`);
    }
}

class Gato extends Animal{
    emitirSom(){
        console.log(`${this.nome} diz: Miauuu!!`);
    }
}

const rex = new Cachorro("Rex");
rex.emitirSom();

const luna = new Cachorro("Luna");
luna.emitirSom();

const mimi = new Gato("Mimi");
mimi.emitirSom();