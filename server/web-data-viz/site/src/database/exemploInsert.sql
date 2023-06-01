-- --------------------------------------------------------------------------------------------
-- Exemplo de Inserts No WEB-DATA-VIZ (Registrando um novo cliente através da tela Adm SafeAir)
-- --------------------------------------------------------------------------------------------
INSERT INTO empresa VALUES
(null, 'Empresa Teste', '123-456-789-101112');

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
    (SELECT idEmpresa FROM empresa AS fk WHERE cnpj = '123-456-789-101112') 
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
    1,
    (SELECT idEmpresa FROM empresa AS fk WHERE cnpj = '123-456-789-101112')
    );
    
    SELECT * FROM empresa;
    SELECT * FROM endereco;
    SELECT * FROM usuario;
    SELECT * FROM empresa JOIN usuario on idEmpresa = usuario.fkEmpresa
						  JOIN endereco on idEmpresa = endereco.fkEmpresa;
                          
-- ----    
-- FIM     
-- ----    
