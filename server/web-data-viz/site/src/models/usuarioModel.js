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
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nomeFunc, emailFunc, senhaFunc) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeFunc, emailFunc, senhaFunc);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (idusuario, nome, email, senha, administrador, fkEmpresa) VALUES (NULL, '${nomeFunc}', '${emailFunc}', '${senhaFunc}', 'Sim', 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
<<<<<<< HEAD:a/server/web-data-viz/site/src/models/usuarioModel.js

function cadastrarEmpresa(nome_Empresa, cnpj) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa():", nome_Empresa, cnpj);
=======
function cadastrarEmpresa(nome_Empresa, cnpj, estado, cidade, bairro, rua, numero, complemento, cep, nomeUsuario, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa():", nome_Empresa, cnpj, estado, cidade, bairro, rua, numero, complemento, cep);
>>>>>>> production:server/web-data-viz/site/src/models/usuarioModel.js
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var insEmpresa = `
    INSERT INTO empresa (idEmpresa, nome, cnpj) VALUES (NULL, '${nome_Empresa}', '${cnpj}');
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
        (SELECT idEmpresa FROM empresa AS fk WHERE cnpj = '${cnpj}') 
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
        1,
        (SELECT idEmpresa FROM empresa AS fk WHERE cnpj = '${cnpj}')
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
        INSERT INTO usuario (idusuario, nome, email, senha, administrador, fkEmpresa) VALUES (NULL, '${nomeNovoFuncionario}', '${emailNovoFuncionario}', '${senhaNovoFuncionario}', '${admFuncionario}', ${empresaFuncionario});
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

module.exports = {
    entrar,
    cadastrar,
    listar,
    cadastrarEmpresa,
    registrarFunc,
    alterarSenha
};