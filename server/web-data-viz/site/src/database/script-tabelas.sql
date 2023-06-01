CREATE DATABASE safeAir DEFAULT CHARACTER SET utf8 ;
USE safeAir ;

-- -----------------------------------------------------
-- Table empresa
-- -----------------------------------------------------
CREATE TABLE empresa (
  idempresa INT auto_increment,
  nome VARCHAR(45),
  cnpj CHAR(18),
  PRIMARY KEY (idempresa)
);

-- -----------------------------------------------------
-- Table usuario
-- -----------------------------------------------------
CREATE TABLE  usuario (
  idusuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  senha VARCHAR(45) NULL,
  administrador INT NULL,
  fkEmpresa INT NOT NULL,
  PRIMARY KEY (idusuario, fkEmpresa),
  FOREIGN KEY (fkEmpresa) REFERENCES empresa (idempresa)
);

-- -----------------------------------------------------
-- Table endereco
-- -----------------------------------------------------
CREATE TABLE  endereco (
  idEndereco INT NOT NULL AUTO_INCREMENT,
  rua VARCHAR(45) NULL,
  numero INT NULL,
  cep CHAR(9) NULL,
  bairro VARCHAR(45) NULL,
  complemento VARCHAR(45) NULL,
  cidade VARCHAR(45) NULL,
  estado VARCHAR(45) NULL,
  fkEmpresa INT NOT NULL,
  PRIMARY KEY (idEndereco, fkEmpresa),
  FOREIGN KEY (fkEmpresa) REFERENCES empresa (idempresa)
);

-- -----------------------------------------------------
-- Table sala
-- -----------------------------------------------------
CREATE TABLE  sala (
  idSala INT NOT NULL AUTO_INCREMENT,
  nomeSala VARCHAR(45) NULL,
  tamanhoSala VARCHAR(45) NULL,
  fkEndereco INT NOT NULL,
  fkEmpresa INT NOT NULL,
  PRIMARY KEY (idSala, fkEndereco, fkEmpresa),
  FOREIGN KEY (fkEndereco)
  REFERENCES endereco (idEndereco),
  FOREIGN KEY (fkEmpresa)
  REFERENCES empresa (idempresa)
);

-- -----------------------------------------------------
-- Table sensor
-- -----------------------------------------------------
CREATE TABLE  sensor (
  idsensor INT NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(45) NULL,
  fkSala INT NULL,
  PRIMARY KEY (idsensor),
  FOREIGN KEY (fkSala)
  REFERENCES sala (idSala)
);

-- -----------------------------------------------------
-- Table dados
-- -----------------------------------------------------
CREATE TABLE  dados (
  dataHr DATETIME NOT NULL,
  temperatura DECIMAL(3,1) NULL,
  umidade DECIMAL(3,1) NULL,
  fkSensor INT NOT NULL,
  PRIMARY KEY (dataHr, fkSensor),
  FOREIGN KEY (fkSensor)
  REFERENCES sensor (idsensor)
);
