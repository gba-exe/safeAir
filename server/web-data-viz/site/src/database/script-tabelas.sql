CREATE DATABASE safeAir;
USE safeAir;

CREATE TABLE empresa (
  cnpj char(18) PRIMARY KEY,
  nome VARCHAR(45) NULL
);

CREATE TABLE  usuario (
  idusuario INT auto_increment,
  nome VARCHAR(45) NULL,
  email VARCHAR(45) NULL unique,
  senha VARCHAR(45) NULL,
  administrador CHAR(3),
  fkEmpresa CHAR(18),
  PRIMARY KEY (idusuario, fkEmpresa),
  FOREIGN KEY(fkEmpresa) REFERENCES empresa(cnpj)
);

CREATE TABLE  endereco (
  idEndereco INT auto_increment,
  rua VARCHAR(45) NULL,
  numero INT NULL,
  cep CHAR(9) NULL,
  bairro VARCHAR(45) NULL,
  complemento VARCHAR(45) NULL,
  cidade VARCHAR(45) NULL,
  estado VARCHAR(45) NULL,
  fkEmpresa CHAR(18) NOT NULL,
  PRIMARY KEY (idEndereco, fkEmpresa),
  FOREIGN KEY (fkEmpresa) REFERENCES empresa (cnpj)
);

CREATE TABLE  sala (
  idSala INT NOT NULL,
  nomeSala VARCHAR(45) NULL,
  tamanhoSala VARCHAR(45) NULL,
  fkEndereco INT NOT NULL,
  fkEmpresa CHAR(18) NOT NULL,
  PRIMARY KEY (idSala, fkEndereco, fkEmpresa),
    FOREIGN KEY (fkEndereco)
    REFERENCES endereco (idEndereco),
    FOREIGN KEY (fkEmpresa)
    REFERENCES empresa (cnpj));