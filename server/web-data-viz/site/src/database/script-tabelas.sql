CREATE DATABASE safeAir DEFAULT CHARACTER SET utf8 ;
USE safeAir ;

-- -----------------------------------------------------
-- Table empresa
-- -----------------------------------------------------
CREATE TABLE empresa (
  cnpj char(18) PRIMARY KEY,
  nome VARCHAR(45) NULL
);
 
-- -----------------------------------------------------
-- Table usuario
-- -----------------------------------------------------
CREATE TABLE  usuario (
  idusuario INT AUTO_INCREMENT,
  nome VARCHAR(45) NULL,
  email VARCHAR(45) NULL UNIQUE,
  senha VARCHAR(45) NULL,
  administrador CHAR(3),
  fkEmpresa CHAR(18),
  PRIMARY KEY (idusuario, fkEmpresa),
  FOREIGN KEY(fkEmpresa) REFERENCES empresa(cnpj)
);

-- -----------------------------------------------------
-- Table endereco
-- -----------------------------------------------------
CREATE TABLE  endereco (
  idEndereco INT AUTO_INCREMENT,
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

-- -----------------------------------------------------
-- Table sala
-- -----------------------------------------------------
CREATE TABLE  sala (
  idSala INT UNIQUE AUTO_INCREMENT,
  nomeSala VARCHAR(45) NULL,
  tamanhoSala INT NULL,
  fkEndereco INT NOT NULL,
  fkEmpresa CHAR(18) NOT NULL,
  PRIMARY KEY (idSala, fkEndereco, fkEmpresa),
  FOREIGN KEY (fkEndereco) REFERENCES endereco (idEndereco),
  FOREIGN KEY (fkEmpresa) REFERENCES empresa (cnpj)
  );

-- -----------------------------------------------------
-- Table sensor
-- -----------------------------------------------------
CREATE TABLE  sensor (
  idsensor INT NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(45) NULL,
  fkSala INT NULL,
  PRIMARY KEY (idsensor),
  FOREIGN KEY (fkSala) REFERENCES sala (idSala)
  );

-- -----------------------------------------------------
-- Table dados
-- -----------------------------------------------------
CREATE TABLE  dados (
  idDado INT NOT NULL AUTO_INCREMENT,
  dataHr DATETIME NULL,
  temperatura DECIMAL(3,1) NULL,
  umidade DECIMAL(3,1) NULL,
  fkSensor INT NOT NULL,
  PRIMARY KEY (idDado, fkSensor),
  FOREIGN KEY (fkSensor) REFERENCES sensor (idsensor)
  );

-- --------------------------------------------------------------------------------------------
-- Exemplo de Inserts No WEB-DATA-VIZ (Registrando um novo cliente através da tela Adm SafeAir)
-- --------------------------------------------------------------------------------------------

INSERT INTO empresa VALUES ('12.345.678/9012-34', 'Safe Air');
INSERT INTO empresa VALUES ('12.345.678/0001-00', 'HP');

INSERT INTO usuario (idUsuario, nome, email, senha, administrador, fkEmpresa) VALUES (null, 'Administrador SafeAir', 'safeAir@gmail.com', '123456789', 'Sim', '12.345.678/9012-34'); 
INSERT INTO usuario (idUsuario, nome, email, senha, administrador, fkEmpresa) VALUES (null, 'Wagner Melo', 'WagnerMelo@gmail.com', 'TesteSenha', 'Sim', '12.345.678/0001-00'); 
INSERT INTO usuario (idUsuario, nome, email, senha, administrador, fkEmpresa) VALUES (null, 'Bruna Camargo', 'brunaCamargo@gmail.com', 'TesteSenha', 'Não', '12.345.678/0001-00'); 

INSERT INTO endereco VALUES (null, 'Rua das Docas', 20, '09220-780', 'Bairro Bela Vista', 'Torre 2B', 'São Paulo', 'São Paulo', '12.345.678/9012-34');
INSERT INTO endereco VALUES (null, 'Rua Padre São Bento', 30, '09220-760', 'Bairro Juenopólis', 'Torre 1A', 'Santo André', 'São Paulo', '12.345.678/0001-00');

INSERT INTO sala values (NULL,'Diretória', 12, 2, '12.345.678/0001-00');
INSERT INTO sala values (NULL,'Recepção', 25, 2, '12.345.678/0001-00');
                  
insert into sensor values (NULL, 'Completo', 1);    
insert into sensor values (NULL, 'Completo', 2);

insert into dados values (NULL, '2023-05-01 12:01:06', 30.7, 75, 1),
                         (NULL, '2023-05-02 12:02:07', 40.7, 45, 1),
                         (NULL, '2023-05-03 12:03:09', 35.7, 30, 1),
                         (NULL, '2023-05-01 12:04:01', 12.2, 20, 1),
                         (NULL, '2023-05-02 12:05:02', 8.2, 20, 1),
                         (NULL, '2023-05-03 12:06:03', 18.2, 65, 1),
                         (NULL, '2023-05-01 12:07:04', 31.2, 75, 1),
                         (NULL, '2023-05-02 12:08:05', 27.2, 80, 1),
                         (NULL, '2023-05-03 12:09:06', 24.0, 90, 1),
                         (NULL, '2023-05-01 12:10:07', 19.2, 75, 1),
                         (NULL, '2023-05-02 12:11:08', 47.0, 20, 1),
                         (NULL, '2023-05-02 12:12:08', 37.0, 20, 1),
                         (NULL, '2023-05-03 12:13:09', 49.2, 40, 1);  

insert into dados values (NULL, '2023-05-01 12:01:06', 32, 40, 2),
                         (NULL, '2023-05-02 12:02:07', 40, 52, 2),
                         (NULL, '2023-05-03 12:03:09', 35, 55, 2),
                         (NULL, '2023-05-01 12:04:01', 11, 50, 2),
                         (NULL, '2023-05-02 12:05:02', 8, 38, 2),
                         (NULL, '2023-05-03 12:06:03', 98, 60, 2),
                         (NULL, '2023-05-01 12:07:04', 32, 70, 2),
                         (NULL, '2023-05-02 12:08:05', 26, 80, 2),
                         (NULL, '2023-05-03 12:09:06', 22, 80, 2),
                         (NULL, '2023-05-01 12:10:07', 17, 45, 2),
                         (NULL, '2023-05-02 12:11:08', 49, 21, 2),
                         (NULL, '2023-05-02 12:12:08', 38.0, 22, 2),
                         (NULL, '2023-05-03 12:13:09', 50, 44, 2);  

-- --------------------------------------------------------------------------------------------
-- FIM
-- --------------------------------------------------------------------------------------------
