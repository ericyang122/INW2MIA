//CLASSE
class tenis{
    constructor(id,preco,estoque,ativo,descricao,marca,numero){
        this.id = id;
        this.preco = preco;
        this.estoque= estoque;
        this.ativo=ativo;
        this.descricao=descricao;
        this.marca=marca;
        this.numero=numero;
    }

    ativar(){
        this.ativo = true
    }

    incluirestoque(valor){
        if (this.ativo){
            if(valor<0){
                console.log("Impossivel realizar ...")
            }
            else if(valor == 0){
                console.log("Impossivel realizar estoque zerado...")
            }
            else {
                this.estoque = this.estoque + valor
            }                        
        }
        else {
            console.log("n tem estoque")
        }   
    }

    retirarestoque(valor){
        if (this.ativo){
            if(valor<0){
                console.log("Impossivel realizar nao ha estoque...")
            }
            else if(valor == 0){
                console.log("Impossivel realizar nao ha estoque...")
            }
            else if(this.estoque<valor){
                console.log("estoque insuficiente...")
            }
            else {
                this.estoque = this.estoque - valor
            }                        
        }
        else {
            console.log("Conta está inativa...")
        }   
    }

}



//PROGRAMA PRINCIPAL

const leia = require("prompt-sync")()

 let tipo=""
 let valor=""

 console.log("bem vindo\n")
 
 tipo=leia("deseja cadastrar produto? S/N").toUpperCase()

 while(tipo==s){
    console.log("bemvindo ok")

    let id = leia("digite o id do produto")
    let preco = leia("digite o preco do produto")
    let estoque = leia("digite o estoque que voce tem")
    let descricao = leia("descricao do produto")
    let marca = leia("digite a marca do produto")
    let numero = leia("digite o numero do produto")

    let p1 = new tenis(id,preco,estoque,false,descricao,marca,numero)

    console.log("produto cadastrado")
    p1.ativar()
    
    for(let i = 0; i<=5;i++){
            console.log(p1)
            valor = parseInt(leia("quantos produtos voce deseja comprar?"))
            if(valor<=0){
                   console.log("digitação incorreta")
            }
            p1.retirarestoque(valor)
            console.log("voce vai pagar"+(p1.preco*valor))

        }
        console.log(p1)
        valor = parseInt(leia("deseja adicionar mais produtos no estoque?"))
        p1.incluirestoque(valor)
        console,log(p1)
    }
    
 
  console.log("nao? tudo bem volte sempre")
