create database safeAir;
use safeAir;

create table empresa(
	cnpj char(14) primary key,
    email varchar(60),
    nome varchar(40),
    senha varchar(20),
    qtdFunCad int
);

create table cadastro(
	idFunc int auto_increment primary key,
    nomeCompleto varchar(40),
	email varchar(60),
    telefone char(14),
    senha varchar(20)
);

create table sensor(
	dia datetime,
    umidade decimal,
    temperatura decimal,
    idSensor int auto_increment primary key
);


show tables;
desc empresa;
desc cadastro;
desc sensor;