create database safeAir;
use safeAir;


-- Início do create e insert da tabela EMPRESA

create table Empresa(
	idEmpresa int primary key auto_increment,
	cnpj char (18),
    nome varchar (40),
    CEP char (9),
    numero int
);

insert into Empresa values (null, '31.872.495/0001-72', 'C6 Bank','01406-000', '3186'),
						   (null, '58.160.789/0001-28', 'Safra','01310-904', '2100'),
						   (null, '13.698.724/0001-22', 'SPtech', '1414-001', '595');

select * from Empresa;

-- Fim do create e insert da tabela EMPRESA 


-- Início do create e insert da tabela SALA

create table Sala(
	idSala int primary key auto_increment,
	nomeSala varchar (45),
	fkEmpresa int,
	foreign key(fkEmpresa) references Empresa(idEmpresa)
) auto_increment = 100;

insert into Sala values (null, 'Sala 24', 1),
						(null, 'Sala 34', 2),
						(null, 'Sala A12', 3);

select * from Sala;

-- Fim do create e insert da tabela SALA


-- Início do create e insert da tabela SENSOR

create table Sensor(
    idSensor int primary key auto_increment,
	tipo varchar (30),
	fkSala int,
	foreign key(fkSala) references Sala(idSala)
);

insert into Sensor values (null, 'Temperatura', 100),
						  (null, 'Temperatura e Umidade', 101),
						  (null, 'Umidade', 102);

select * from Sensor;

-- Fim do create e insert da tabela SENSOR


-- Início do create e insert da tabela DADOS

create table Dados(
    idDados int primary key auto_increment,
    dataHr datetime,
	temperatura_C° decimal (3,1),
	umidade decimal (4,1),
    fkSensor int,
	foreign key(fkSensor) references Sensor(idSensor)
) auto_increment = 1000;


insert into Dados values (null, '2023-04-06 19:47:24', 22.5, null,1),
						 (null, '2023-04-06 19:49:31', 20, 70.5,2),
						 (null, '2023-04-06 20:35:55', null, 60,3);

select * from Dados;

-- Fim do create e insert da tabela DADOS


-- Início do create e insert da tabela USUARIO

create table Usuario(
	idusuario int auto_increment primary key,
    nomeCompleto varchar(45),
	email varchar(60),
    senha varchar(20),
    telefone char(14),
    cpf char(14) unique,
    fkEmpresa1 int,
    foreign key(fkEmpresa1) references Empresa(idEmpresa),
    fkAdministrador int,
	foreign key(fkAdministrador) references Usuario(idusuario)
);

insert into Usuario values (null, 'João Vitor Ferreira', 'joao@gmail.com', '#Jvferreira1627', '(11)98278-1627', '364.248.319-15',1,null),
						   (null, 'Maria Eduarda', 'mari@gmail.com', '#mari12345', '(11)91548-3254', '541.321.954-14',1,1),
						   (null, 'Ana Matos da Silva', 'ana@gmail.com', '#Amsilva1237', '(11)93372-1234', '199.315.308-16',2, null),
						   (null, 'Bruno Fernandes Seixas', 'brubru@gmail.com', '#BruFer5672', '(11)96524-3248', '659.684.315-12',3, null);

select * from Usuario;

-- Fim do create e insert da tabela USUARIO


-- Início do select de todas as TABELAS

select * from Usuario, Empresa, Sala, Sensor, Dados where fkEmpresa1 = idEmpresa
													  and fkEmpresa = idEmpresa
													  and fkSala = idSala
													  and fkSensor = idSensor;

-- Fim do select de todas as TABELAS


-- Início dos comandos para mostrar individualmente as TABELAS

select * from Usuario;
select * from Empresa;
select * from Sala;
select * from Sensor;
select * from Dados;

-- Fim dos comandos para mostrar individualmente as TABELAS


-- Início dos comandos para descrever individualmente as TABELAS

desc Empresa;
desc Sala;
desc Sensor;
desc Dados;
desc Usuario;

-- Fim dos comandos para descrever individualmente as TABELAS


-- Início dos comandos para excluir individualmente as TABELAS

drop table Dados;
drop table Sensor;
drop table Sala;
drop table Usuario;
drop table Empresa;

-- Fim dos comandos para excluir individualmente as TABELAS


-- Início do comando para excluir o BANCO DE DADOS

drop database safeAir;

-- Fim do comando para excluir o BANCO DE DADOS