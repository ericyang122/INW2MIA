let total=0
for(let x=1; x<=100; x++){
    if((x%2)==1 && (x%3)==0){
        console.log(x)
        total += x
    }
}
console.log(total)