CREATE DATABASE safeAir DEFAULT CHARACTER SET utf8 ;
USE safeAir ;

drop database safeair;


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
  idusuario INT auto_increment,
  nome VARCHAR(45) NULL,
  email VARCHAR(45) NULL unique,
  senha VARCHAR(45) NULL,
  administrador CHAR(3),
  fkEmpresa CHAR(18),
  PRIMARY KEY (idusuario, fkEmpresa),
  FOREIGN KEY(fkEmpresa) REFERENCES empresa(cnpj)
);


insert into usuario values (null, 'Teste', 'safeair@gmail.com', 'senha');
-- -----------------------------------------------------
-- Table endereco
-- -----------------------------------------------------
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
-- --------------------------------------------------------------------------------------------
-- Exemplo de Inserts No WEB-DATA-VIZ (Registrando um novo cliente através da tela Adm SafeAir)
-- --------------------------------------------------------------------------------------------
INSERT INTO empresa VALUES
('12.345.678/0001-00', 'Empresa Teste');

INSERT INTO endereco (
      idEndereco,
    rua,
    numero,
    cep,
    bairro,
    complemento,
    cidade,
    estado,
    fkEmpresa)
    VALUES
    (null,
    'Rua exemplo',
    20,
    '09220-780',
    'Bairro exemplo',
    'Complemento exemplo',
    'Cidade exemplo',
    'Estado exemplo',
    (select cnpj from empresa as fk where cnpj = '12.345.678/0001-00')
    );
    INSERT INTO endereco (
      idEndereco,
    rua,
    numero,
    cep,
    bairro,
    complemento,
    cidade,
    estado,
    fkEmpresa)
    VALUES
    (null,
    'Rua 2',
    30,
    '09220-760',
    'Bairro 2',
    'Complemento 2exemplo',
    'Santarem',
    'São Paulo',
    (select cnpj from empresa as fk where cnpj = '12.345.678/0001-00')
    );
   
    INSERT INTO usuario (
    idUsuario,
    nome,
    email,
    senha,
    administrador,
    fkEmpresa
    )
    VALUES (
    null,
    'Usuario Teste',
    'testeEmail@gmail.com',
    'TesteSenha',
    'Não',
    (select cnpj from empresa as fk where cnpj = '12.345.678/0001-00')
    );
update usuario set administrador = 'Não' where idUsuario = '1';                          
                         
-- ----    
-- FIM    
-- ----    
   
        INSERT INTO empresa (idEmpresa, nome, cnpj) VALUES (NULL, 'Abelha', '123');
    INSERT INTO endereco VALUES (NULL, 'Abe', 2, '0220', 'Eita', 'Nois', 'Buraco', 'Maranhao');


    INSERT INTO endereco (idEndereco, rua, numero, cep, bairro, complemento, cidade, estado, fkEmpresa)
    VALUES (NULL, 'teste2', '222', '222222', 'aaaaaa', 'AAAAA', 'osasco', 'SP', '12.345.678/0001-00');
    INSERT INTO endereco (idEndereco, rua, numero, cep, bairro, complemento, cidade, estado) VALUES (NULL, 'a', '2', '1', 'b', 'c', 'd', 'e');
   
      INSERT INTO endereco (idEndereco, rua, numero, cep, bairro, complemento, cidade, estado, fkEmpresa) VALUES (NULL, 'teste3', '2223', '123456789', 'aaaaaaa', 'AAAAA', 'osasco', 'SP', '12.345.678/0001-00');

-- -----------------------------------------------------
-- Table sala
-- -----------------------------------------------------
CREATE TABLE  sala (
  idSala INT UNIQUE,
  nomeSala VARCHAR(45) NULL,
  tamanhoSala VARCHAR(45) NULL,
  fkEndereco INT NOT NULL,
  fkEmpresa CHAR(18) NOT NULL,
  PRIMARY KEY (idSala, fkEndereco, fkEmpresa),
    FOREIGN KEY (fkEndereco)
    REFERENCES endereco (idEndereco),
    FOREIGN KEY (fkEmpresa)
    REFERENCES empresa (cnpj));



-- -----------------------------------------------------
-- Table sensor
-- -----------------------------------------------------
CREATE TABLE  sensor (
  idsensor INT NOT NULL,
  tipo VARCHAR(45) NULL,
  fkSala INT NULL,
  PRIMARY KEY (idsensor),
    FOREIGN KEY (fkSala)
    REFERENCES sala (idSala));

INSERT INTO sala values (1, 'Salona', 'M', 1, '12.345.678/0001-00'),
                                    (2,'Sala do Vasco', 'P',1 ,'12.345.678/0001-00');

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
    REFERENCES sensor (idsensor));

   
    SELECT AVG(temperatura), AVG(umidade), CAST(dataHr as date) as DATA
      FROM dados
    JOIN sensor ON dados.fkSensor = sensor.idsensor
    JOIN sala ON sensor.fkSala = sala.idSala
    WHERE dados.dataHr like '%-05-%'
    and sala.fkEmpresa = '12.345.678/0001-00'
    and sala.idSala = 1
    and sala.fkEndereco = 1
      GROUP BY DATE(dataHr);
   
               
insert into sensor values (1, 'Completo', 1);    
insert into sensor values (2, 'Completo', 2);            
insert into dados values
('2023-05-01 12:01:06', 30.7, 75, 1),
('2023-05-02 12:02:07', 40.7, 45, 1),
('2023-05-03 12:03:09', 35.7, 30, 1),
('2023-05-01 12:04:01', 12.2, 20, 1),
('2023-05-02 12:05:02', 8.2, 20, 1),
('2023-05-03 12:06:03', 18.2, 65, 1),
('2023-05-01 12:07:04', 31.2, 75, 1),
('2023-05-02 12:08:05', 27.2, 80, 1),
('2023-05-03 12:09:06', 24.0, 90, 1),
('2023-05-01 12:10:07', 19.2, 75, 1),
('2023-05-02 12:11:08', 47.0, 20, 1),
('2023-05-02 12:12:08', 37.0, 20, 1),
('2023-05-03 12:13:09', 49.2, 40, 1);  