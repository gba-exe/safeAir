create database safeAir;
use safeAir;

create table empresa(
	cnpj char(14) primary key,
    email varchar(60),
    nome varchar(40),
    senha varchar(20),
    qtdFunCad int
);

insert into empresa values ('5829463984267', 'empresa@gmail.com', 'Empresa', '#Emp267', 50);
						  
insert into empresa values ('5928392832857', 'sptech@gmail.com', 'SPTech', '#Spt857', 20), 
						   ('5283903902049', 'safra@gmail.com', 'Safra', '#Saf049', 32); 

create table cadastro(
	idFunc int auto_increment primary key,
    nomeCompleto varchar(40),
	email varchar(60),
    telefone char(14),
    senha varchar(20)
);

insert into cadastro values (null, 'João Vitor Ferreira', 'joao@gmail.com', '(11)98278-1627', '#Jvferreira1627');
							
insert into cadastro values (null, 'Ana Matos da Silva', 'ana@gmail.com', '(11)98288-1237', '#Amsilva1237'),
							(null, 'André Pereira Gomez', 'andre@gmail.com', '(11)93372-1234', '#Apgomez1234');

create table sensor(
	dia datetime,
    umidade decimal,
    temperatura decimal,
    idSensor int auto_increment primary key
);

insert into sensor values ('2022-03-05 10:45:32', 50, 28, null),
						  ('2022-03-05 10:50:32', 55, 32, null),
						  ('2022-03-05 10:55:32', 48, 30, null);
	
insert into sensor values ('2022-03-05 11:00:32', 30, 27, null),
						  ('2022-03-05 11:05:32', 28, 25, null),
						  ('2022-03-05 11:10:32', 21, 20, null);
                          
select * from empresa;
select * from cadastro;
select * from sensor;                          


desc empresa;
desc cadastro;
desc sensor;

drop database safeAir;