var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    // var teste = ``;
    console.log("Executando a instrução SQL: \n" + instrucao);
    // database.executar(teste);
    return database.executar(instrucao);
}


// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nomeFunc, emailFunc, senhaFunc) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeFunc, emailFunc, senhaFunc);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (idusuario, nome, email, senha, administrador, fkEmpresa) VALUES (NULL, '${nomeFunc}', '${emailFunc}', '${senhaFunc}', 'Sim', '12.345.678/9012-34');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarEmpresa(nome_Empresa, cnpj, estado, cidade, bairro, rua, numero, complemento, cep, nomeUsuario, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa():", nome_Empresa, cnpj, estado, cidade, bairro, rua, numero, complemento, cep);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var insEmpresa = `
    INSERT INTO empresa (nome, cnpj) VALUES ('${nome_Empresa}', '${cnpj}');
    `;

    var insEndereco = `
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
        (NULL,
        '${rua}',
        ${numero},
        '${cep}',
        '${bairro}',
        '${complemento}',
        '${cidade}',
        '${estado}',
        (SELECT cnpj FROM empresa AS fk WHERE cnpj = '${cnpj}') 
        );
    `;

    var insUsuario = `        
    INSERT INTO usuario (
        idUsuario,
        nome,
        email,
        senha,
        administrador,
        fkEmpresa
        )
        VALUES (
        NULL,
        '${nomeUsuario}',
        '${email}',
        '${senha}',
        'Sim',
        (SELECT cnpj FROM empresa AS fk WHERE cnpj = '${cnpj}')
        );    

    `;
    console.log("Executando a instrução SQL: \n" + insEmpresa);
    database.executar(insEmpresa);
    console.log("Executando a instrução SQL: \n" + insEndereco);
    database.executar(insEndereco);
    console.log("Executando a instrução SQL: \n" + insUsuario);
    return database.executar(insUsuario);
}

function registrarFunc(nomeNovoFuncionario, emailNovoFuncionario, admFuncionario, empresaFuncionario, senhaNovoFuncionario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeNovoFuncionario, emailNovoFuncionario, admFuncionario, empresaFuncionario, senhaNovoFuncionario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (idusuario, nome, email, senha, administrador, fkEmpresa) VALUES (NULL, '${nomeNovoFuncionario}', '${emailNovoFuncionario}', '${senhaNovoFuncionario}', '${admFuncionario}', '${empresaFuncionario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterarSenha(novaSenhaFunc, idFunc) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", novaSenhaFunc, idFunc);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        UPDATE usuario SET senha = '${novaSenhaFunc}' where idusuario = ${idFunc};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function captarSalas(idEmpresa) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function captarSalas(): ", idEmpresa)
    var instrucao = `
        SELECT idSala, nomeSala, fkEmpresa from sala WHERE fkEmpresa = '${idEmpresa}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function captarEndereco(idEmpresa) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function captarEndereco(): ", idEmpresa)
    var instrucao = `
        SELECT idEndereco, estado, cidade, rua, numero FROM endereco WHERE fkEmpresa = '${idEmpresa}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function atualizarAnalytics(idEmpresa, idSala, idEndereco, mesAnterior) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarAnalytics(): ", idEmpresa, idSala, idEndereco, mesAnterior)
    var instrucao = `

    SELECT AVG(temperatura) as 'mediaTemp', AVG(umidade) as 'mediaUmi', CAST(dataHr as date) as data FROM dados
    JOIN sensor ON dados.fkSensor = sensor.idsensor
    JOIN sala ON sensor.fkSala = sala.idSala
    WHERE dados.dataHr like '%-${mesAnterior}-%'
    and sala.fkEmpresa = '${idEmpresa}'
    and sala.idSala = ${idSala}
    and sala.fkEndereco = ${idEndereco}
	GROUP BY DATE(dataHr);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function cadastrarSala(nomeSala,tamanhoSala, cep, cnpjSala) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSala():", nomeSala, tamanhoSala, cep, cnpjSala);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    var inserirSala = `
        INSERT INTO sala (idSala, nomeSala, tamanhoSala, fkEndereco, fkEmpresa) VALUES (NULL, '${nomeSala}', ${tamanhoSala}, '${cep}', '${cnpjSala}');
    `;
    console.log("Executando a instrução SQL: \n" + inserirSala);
    return database.executar(inserirSala);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    cadastrarEmpresa,
    registrarFunc,
    alterarSenha,
    captarSalas,
    captarEndereco,
    atualizarAnalytics,
    cadastrarSala
};