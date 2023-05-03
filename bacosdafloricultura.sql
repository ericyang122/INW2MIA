create database Florlinda
use Florlinda

CREATE TABLE produtos (
IDprodutos int primary key identity (1,1),
NomeDoProd varchar(50),
QuantidadeDeProd int,
Valor int,
cor varchar(20),
)

 

CREATE TABLE pedidos (
IDpedidos int primary key identity(1,1),
IDprodutos int,
QuantidadeDeVendas int,
Datadacompra int,
endereçoDoPedido varchar(50),
ValorTotal INT,
);

 

CREATE TABLE cliente (
CPF char(11) primary key not null,
Nome varchar(50),
Endereco varchar(150),
Telefone varchar(20),
Sexo char(1),
Data_nasc int,
);

 

CREATE TABLE VENDAS(
id int primary key identity(1,1),
CPF char(11) foreign key references cliente("cpf"),
IDprodutos int foreign key references produtos("IDprodutos"),
IDpedidos int foreign key references pedidos("IDpedidos"), 
)

 

insert into produtos(NomeDoProd, QuantidadeDeProd, Valor, cor)
values ('rosa do deserto','7','30','rosa')

 

insert into produtos(NomeDoProd, QuantidadeDeProd, Valor, cor)
values ('bromélia','10','50','rosa')

 

insert into produtos(NomeDoProd, QuantidadeDeProd, Valor, cor)
values ('Crisântemo','17','45','rosa/amarelo/branco')

 

insert into produtos(NomeDoProd, QuantidadeDeProd, Valor, cor)
values ('Hibisco','20','35','amarelo')

 

insert into produtos(NomeDoProd, QuantidadeDeProd, Valor, cor)
values ('Ixora','22','35','rosa')

 

insert into pedidos(IDprodutos,QuantidadeDeVendas,Datadacompra,endereçoDoPedido,ValorTotal)
values ('2','3','12032022','Bairro Jacinto/Rua aquinorego','150')

 

insert into pedidos(IDprodutos,QuantidadeDeVendas,Datadacompra,endereçoDoPedido,ValorTotal)
values ('1','2','14052022','Bairro Mooca/Rua leitao','60')

 

insert into pedidos(IDprodutos,QuantidadeDeVendas,Datadacompra,endereçoDoPedido,ValorTotal)
values ('4','1','02122022','Bairro Bras/Rua jacino','35')

 

insert into pedidos(IDprodutos,QuantidadeDeVendas,Datadacompra,endereçoDoPedido,ValorTotal)
values ('5','5','23072022','Bairro Piriquito/Rua rego','175')

 

insert into pedidos(IDprodutos,QuantidadeDeVendas,Datadacompra,endereçoDoPedido,ValorTotal)
values ('3','1','12032022','Bairro Joseu/Rua Fim','45')

 

insert into cliente(CPF, Nome, Endereco, Telefone, Sexo, Data_nasc)
values('12334578912','Vitor','Bairro Joseu/Rua Fim','192121346','M','12032000')

 

insert into cliente(CPF, Nome, Endereco, Telefone, Sexo, Data_nasc)
values('21345678834','Jessica','Bairro Piriquito/Rua rego','11923459921','F','12121999')

 

insert into cliente(CPF, Nome, Endereco, Telefone, Sexo, Data_nasc)
values('23421323423','Amanda','Bairro Bras/Rua jacino','19923452212','F','12032000')

 

insert into cliente(CPF, Nome, Endereco, Telefone, Sexo, Data_nasc)
values('23304323476','Eric','Bairro Mooca/Rua leitao','11958417701','M','06052006')

 

insert into cliente(CPF, Nome, Endereco, Telefone, Sexo, Data_nasc)
values('34498323452','Raul','Bairro Jacinto/Rua aquinorego','1223452345','M','03032000')

 

insert into VENDAS(CPF, IDprodutos, IDpedidos)
values('12334578912','3','5')

 

insert into VENDAS(CPF, IDprodutos, IDpedidos)
values('21345678834','3','4')

 

insert into VENDAS(CPF, IDprodutos, IDpedidos)
values('23421323423','4','3')

 

insert into VENDAS(CPF, IDprodutos, IDpedidos)
values('23304323476','1','2')

 

insert into VENDAS(CPF, IDprodutos, IDpedidos)
values('34498323452','2','1')

 

select * from produtos
select * from pedidos
select * from cliente
select * from VENDAS