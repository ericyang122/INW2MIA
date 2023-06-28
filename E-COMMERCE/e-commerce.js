const leia = require("prompt-sync")()

let matriculas = ["MAT01","MAT02","MAT03","MAT04"]
let alunos = ["MARCOS","PEDRO","MARIA","PAULO"]
let notas = [0,0,0,0]
let codigo = [
'GRP0X-01',
'GRP0X-02',
'GRP0X-03',
'GRP0X-04',
'GRP0X-05',
'GRP0X-06',
'GRP0X-07',
'GRP0X-08',
'GRP0X-09',
'GRP0X-10'
]
let produto = [
'BONÉ',
'CALÇA',
'BERMUDA AFRO',
'BATA',
'CAMISA AFRO',
'SAIA RODADA',
'SAIA STYLE',
'MACACÃO',
'CAMISETA TEMATICA',
'CALÇA SOCIAL AFRO'
]
let valor = [
100.00,
150.00,
90.00,
140.00,
150.00,
90.00,
90.00,
150.00,
100.00,
95.50
]
let estoque = [10,10,10,10,10,10,10,10,10,10,]
let carrinho = [0,0,0,0,0,0,0,0,0,0,]
let opcao
let auxCodigo

//tela 1 

 do{
    console.log("loga da identic store")
    console.log("the best ue?")
    console.log("\n")


    console.log("cod\tDESCRICAO\tVALOR\tESTOQUE")
    for(let i = 0; i < codigo.length; i++  ){
        console.log(codigo[i]+' \t '+produto[i]+' \t '+valor[i]+' \t '+estoque[i])
    }
    opcao = leia("fazer compras S/N: ").toUpperCase()
   //laço das compras
   while(true){
    
    auxCodigo = leia("digite o codigo do produo que deseja comprar: ").toUpperCase()
    for(let i = 0; i < codigo.length; i++  ){
        if(auxCodigo == codigo[i]){
            console.log(codigo[i]+' \t '+produto[i]+' \t '+valor[i]+' \t '+estoque[i])
            carrinho[i] = parseInt(leia("digite a quantidade que deseja comprar : "))
            console.log("sub-total " +(valor[i]*carrinho[i]))
        }
        console.log("carrinho de compras")
        console.log("cod\t\tdescricao\tValor\testoque\tqtde comprada")
        for(let i = 0; i < codigo.length; i++  ){
            if(carrinho[i]>0){
                console.log(codigo[i]+' \t '+produto[i]+' \t '+valor[i]+' \t '+estoque[i]+' \t ' + carrinho[i])
            }
        }
        
    }
    let continua = leia("continuar comprando S/N?").toUpperCase()
        if( continua = 'N'){
            break
        }
}

 }while(opcao!='N')
 console.log("ate breve !!!")
