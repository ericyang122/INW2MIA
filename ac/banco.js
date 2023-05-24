class conta {
    constructor(numero, cpf, saldo, ativo) {
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo
    }

    ativar() {
        this.ativo = true;
    }

    credito(valor) {
        if (this.ativo) {
            if (valor < 0) {
                console.log("Impossivel realizar, valor negativo")
            }
            else if (valor == 0) {
                console.log("Impossivel realizar, valor zerado...")
            }
            else {
                this.saldo += valor
            }
        }
        else {
            console.log("Conta inativa....")
        }
    }

    debito(valor) {
        if (this.ativo) {
            if (valor < 0) {
                console.log("Impossivel realizar, valor negativo...")
            }
            else if (valor == 0) {
                console.log("Impossivel realizar, valor zerado...")
            }
            else {
                this.saldo -= valor
            }
        }
        else {
            console.log("Conta inativa...")
        }
    }

}

class poupanca extends conta {
    constructor(numero, cpf, saldo, ativo,diaAniversarioPoupanca) {
        super(numero, cpf, saldo, ativo)
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }
    correcao(data){
        if (data==this.diaAniversarioPoupanca){
        this.credito(this.saldo*0.05)
        }
        else{
            console.log("data errada...")
        }
    }
}

class corrente extends conta {
    constructor(numero, cpf, saldo, ativo,contadorTalao) { 
        super(numero, cpf, saldo, ativo)
        this.contadorTalao = contadorTalao
       
    }
    pedirTalao(qtd){
        if(qtd>this.contadorTalao){
            console.log("impossivel realizar quantidade indisponivel")
        }
        else if((qtd*30)>this.saldo){
            console.log("saldo insuficiene")
        }
        else{
            console.log("emtitindo talao")
        this.contadorTalao=this.contadorTalao-qtd
        this.debito(qtd*30)
        }
    }
}

class especial extends conta {
    constructor(numero, cpf, saldo, ativo,limite) {
        super(numero, cpf, saldo, ativo)
        this.limite = limite
        
    }
    usarLimite(valor){
    if(valor>this.limite){
     console.log("saldo indisponivel")
    }
    else{
        this.limite=this.limite-valor
        this.credito(valor)
    }
}
}

class empresa extends conta {
    constructor(numero, cpf, saldo, ativo,limiteEmpresa) {
        super(numero, cpf, saldo, ativo)        
        this.limiteEmpresa = limiteEmpresa
    }
    pedirEmprestimo(valor){
        if(valor>this.limiteEmpresa){
            console.log("saldo indisponivel")
           }
           else{
               this.limiteEmpresa=this.limiteEmpresa-valor
               this.credito(valor)
           }
    }
}

class estudantil extends conta {
    constructor(numero, cpf, saldo, ativo,limiteEstudantil) {
        super(numero, cpf, saldo, ativo)
        this.limiteEstudantil = limiteEstudantil
        
    }
    usarEstudantil(valor){
        if(valor>this.limiteEstudantil){
            console.log("saldo indisponivel")
           }
           else{
               this.limiteEstudantil=this.limiteEstudantil-valor
               this.credito(valor)
           }
    }
}


// PROGRAMA PRINCIPAL			
const leia = require("prompt-sync")()
//console log vazio sao para pular linhas
console.log("")
console.log("bbcard")
console.log("gaste quanto quiser com nossa card da bbcard")
console.log("")
console.log("1-conta poupança")
console.log("2-conta corrente")
console.log("3-conta especial")
console.log("4-conta empresa")
console.log("5-conta estudantil")
console.log("")
let tipoConta=(leia("digite o codigo da opçao selecionada :"))

if(tipoConta==1){

let numero = (leia("Digite o numero da conta : "))
let cpf = leia("Digite o cpf da conta : ")
let c1 = new poupanca(numero, cpf, 0,false,16)
let op = ""
let valor = 0
c1.ativar()
for (let x = 1; x <= 10; x++) {
    console.log("Movimento : " + x)
    console.log("Saldo atual conta : " + c1.saldo)
    op = leia("Digite D - debito ou C para credito : ")
    if (op == "D") {
        valor = parseInt(leia("Digite o valor para debito : "))
        debito(valor)
    }
    else if (op == "C") {
        valor = parseInt(leia("Digite o valor para crédito : "))
        c1.credito(valor)
    }
}
let data=(leia("digite a data"))
c1.correcao(data)

console.log("")
console.log("bbcard")
console.log("gaste quanto quiser com nossa card da bbcard")
console.log("")
console.log("conta poupança")
console.log("Saldo final da conta " + c1.saldo)
}

else if(tipoConta==2){
    let numero = (leia("Digite o numero da conta : "))
let cpf = leia("Digite o cpf da conta : ")
let c1 = new corrente(numero, cpf, 0, false,3)
let op = ""
let valor = 0
c1.ativar()
for (let x = 1; x <= 10; x++) {
    console.log("Movimento : " + x)
    console.log("Saldo atual conta : " + c1.saldo)
    op = leia("Digite D - debito ou C para credito : ")
    if (op == "D") {
        valor = parseInt(leia("Digite o valor para debito : "))
        c1.debito(valor)
    }
    else if (op == "C") {
        valor = parseInt(leia("Digite o valor para crédito : "))
        c1.credito(valor)
    }
}
let pedido=(leia("quer um talao de cheques S/N?"))
 if(pedido=="S"){
    qtd= parseInt(leia("quantos taloes quer? "))
    c1.pedirTalao(qtd)
 }
 else{
    console.log("obrigado")
 }

console.log("")
console.log("bbcard")
console.log("gaste quanto quiser com nossa card da bbcard")
console.log("")
console.log("conta poupança")
console.log("Saldo final da conta " + c1.saldo)
console.log("taloes disponiveis " + c1.contadorTalao)

}

else if(tipoConta==3){
    let numero = (leia("Digite o numero da conta : "))
let cpf = leia("Digite o cpf da conta : ")
let c1 = new especial(numero, cpf, 0, false,1000)
let op = ""
let valor = 0
c1.ativar()
for (let x = 1; x <= 10; x++) {
    console.log("Movimento : " + x)
    console.log("Saldo atual conta : " + c1.saldo)
    op = leia("Digite D - debito ou C para credito : ")
    if (op == "D") {
        valor = parseInt(leia("Digite o valor para debito : "))
        c1.debito(valor)
    }
    else if (op == "C") {
        valor = parseInt(leia("Digite o valor para crédito : "))
        c1.credito(valor)
    }
}

let pedido=(leia("quer usar seu limite S/N?"))
 if(pedido=="S"){
    valor= parseInt(leia("quantos quer usar? "))
    c1.usarLimite(valor)
 }
 else{
    console.log("obrigado")
 }

console.log("")
console.log("bbcard")
console.log("gaste quanto quiser com nossa card da bbcard")
console.log("")
console.log("conta poupança")
console.log("Saldo final da conta " + c1.saldo)
console.log("limite é " + c1.limite)
}

else if(tipoConta==4){
    let numero = (leia("Digite o numero da conta : "))
let cpf = leia("Digite o cpf da conta : ")
let c1 = new empresa(numero, cpf, 0, false,10000)
let op = ""
let valor = 0
c1.ativar()
for (let x = 1; x <= 10; x++) {
    console.log("Movimento : " + x)
    console.log("Saldo atual conta : " + c1.saldo)
    op = leia("Digite D - debito ou C para credito : ")
    if (op == "D") {
        valor = parseInt(leia("Digite o valor para debito : "))
        c1.debito(valor)
    }
    else if (op == "C") {
        valor = parseInt(leia("Digite o valor para crédito : "))
        c1.credito(valor)
    }
}

let pedido=(leia("quer um empretimo S/N?"))
 if(pedido=="S"){
    valor= parseInt(leia("de quanto? "))
    c1.pedirEmprestimo(valor)
 }
 else{
    console.log("obrigado")
 }

console.log("")
console.log("bbcard")
console.log("gaste quanto quiser com nossa card da bbcard")
console.log("")
console.log("conta poupança")
console.log("Saldo final da conta " + c1.saldo)
console.log("o limite é " + c1.limiteEmpresa)
}

else if(tipoConta==5){
    let numero = (leia("Digite o numero da conta : "))
let cpf = leia("Digite o cpf da conta : ")
let c1 = new estudantil(numero, cpf, 0, false,5000)
let op = ""
let valor = 0
c1.ativar()
for (let x = 1; x <= 10; x++) {
    console.log("Movimento : " + x)
    console.log("Saldo atual conta : " + c1.saldo)
    op = leia("Digite D - debito ou C para credito : ")
    if (op == "D") {
        valor = parseInt(leia("Digite o valor para debito : "))
        c1.debito(valor)
    }
    else if (op == "C") {
        valor = parseInt(leia("Digite o valor para crédito : "))
        c1.credito(valor)
    }
}
let pedido=(leia("quer um empretimo S/N?"))
 if(pedido=="S"){
    valor= parseInt(leia("de quanto? "))
    c1.usarEstudantil(valor)
 }
 else{
    console.log("obrigado")
 }

console.log("")
console.log("bbcard")
console.log("gaste quanto quiser com nossa card da bbcard")
console.log("")
console.log("conta poupança")
console.log("Saldo final da conta " + c1.saldo)
console.log("o limite é " + c1.limiteEstudantil)
}