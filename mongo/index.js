//mongodb://localhost:27017

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/exemplo",
{useNewUrlParser : true,
 useUnifiedTopology:true,
 serverSelectionTimeoutMS: 10000
});

const db = mongoose.connection

db.on("error", console.error.bind(console,"connection error : "))

db.once("open" , function(){
    console.log("Estamos conectados ao banco")
})
const pessoaSchema = new mongoose.Schema({
    nome : String,
    idade : Number,
    profissao : String 
});
const pessoa = mongoose.model('pessoa',pessoaSchema);
const marcos = new pessoa({
    nome : 'marcos',
    idade : 25,
    profissao : 'odontologo'
});
const jessica = new pessoa({
    nome : 'jessica',
    idade : 13,
    profissao : 'estudante'
});

console.log(marcos.nome);
console.log(marcos.idade);
console.log(marcos.profissao);
marcos.save();

console.log(jessica.nome);
console.log(jessica.idade);
console.log(jessica.profissao);
jessica.save();

const alunosSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String 
});
const alunos = mongoose.model('alunos',alunosSchema);

const paulo = new alunos({
    matricula : "12334",
    nome: "paulo",
    idade: 15,
    turma: "2mia",
})
console.log(paulo.matricula);
console.log(paulo.nome);
console.log(paulo.idade);
console.log(paulo.turma);
paulo.save();
