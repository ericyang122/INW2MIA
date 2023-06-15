const leia = require("prompt-sync")()
let numero=0
let total=0
let maior=0
let contador=-1


while(numero>=0){
    total +=numero
    if(numero>maior){
        maior = numero
    }
    contador++
    numero=parseInt(leia('digite um numero :'))
       
}


console.log("o total é :" + total)
console.log("o maior numero é :" + maior)
console.log("qtde :" + contador)
console.log("fim do programa")