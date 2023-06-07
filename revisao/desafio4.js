const leia = require("prompt-sync")()

A = parseInt(leia("escreva um numero A :"))
B = parseInt(leia("escreva um numero B :"))
C = parseInt(leia("escreva um numero C :"))

R = Math.pow((A+B ),2)

S = Math.pow((B+C),2)

d =(R+ S)/2

console.log("resultado final vai ser : "+d)