class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento; 
    }

    fazerBarulho(){
        console.log("fazendo barulho...")
    }
    retornarIdade(anoAtual){
        return anoAtual - this.nascimento
    }
}

class gato extends Animal{
    constructor(tipo,raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor;
    }

    miar(){
        console.log("miau...")
    }
}

class cachorro extends Animal{
    constructor(tipo,raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("latindo...")
    }
}






let bicho1 = new Animal("mamifero","medio", false, 2020)
let frajola = new gato("felino","sphynx","preto")
let snop = new cachorro("canino","snop","malhado")
console.log(bicho1)
console.log(bicho1.porte)
bicho1.fazerBarulho()
frajola.fazerBarulho()
frajola.miar()
snop.latir()
snop.nascimento = 2021
console.log("a idade e " + snop.retornarIdade(2023))