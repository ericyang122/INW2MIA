let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['ana','Bia','carlos','daniel'])
})

p
.then(valor => valor [0])
.then(valor => console.log(valor))