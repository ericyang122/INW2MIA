const leia = require("prompt-sync")()
let d
let x1 = parseInt(leia("digite x1 :"))
let y1 = parseInt(leia("digite y1 :"))
let x2 = parseInt(leia("digite x2 :"))
let y2 = parseInt(leia("digite y2 :"))

d =Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))

console.log("o resultado é "+ d)