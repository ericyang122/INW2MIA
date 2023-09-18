const mongoose = require('mongoose');
const fs = require('fs')
const csv = require('csv-parser');

// conectar o bvancos de dados

mongoose.connect("mongodb://127.0.0.1:27017/exemplo",
{useNewUrlParser : true,
 useUnifiedTopology:true,
 serverSelectionTimeoutMS: 30000
});

const produtoSchema = new mongoose.Schema({
    codigo : string,
    descricao: String,
    valor: Number,
    estoque: Number,

})

const produtos = mongoose.model('produtos', produtoSchema);
function lerCSVSalvarMongo(){
    const resultados = []
    fs.createReadStream('base.csv')
    .pipe(csv())
    .on('data', (dados)=>{
        resultados.push(dados);
    })
    .on('end' , ()=>{
        produtos.insertMany(resultados)
        .then(()=>{
            console.log("importado com sucesso")
            mongoose.connection.close();
        })
        .catch((error)=>{
            console.log("erro na falha de importacao de daddos", error),
            mongoose.connection.close();
        })
    })
}