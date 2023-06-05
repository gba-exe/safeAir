var usuarioModel = require("../models/usuarioModel");


var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeFunc = req.body.nomeCompletoServer;
    var emailFunc = req.body.emailServer;
    var senhaFunc = req.body.senhaServer;

    // Faça as validações dos valores
    if (nomeFunc == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailFunc == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaFunc == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeFunc, emailFunc, senhaFunc)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarEmpresa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome_Empresa = req.body.nomeEmpresaServer;
    var cnpj = req.body.cnpjServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var rua = req.body.ruaServer;
    var numero = req.body.numeroServer;
    var complemento = req.body.complementoServer;
    var cep = req.body.cepServer;
    var nomeUsuario = req.body.nomeUsuarioServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome_Empresa == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Seu cidade está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Seu rua está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Seu complemento está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    }
    else if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarEmpresa(nome_Empresa, cnpj, estado, cidade, bairro, rua, numero, complemento, cep, nomeUsuario, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarSala(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeSala = req.body.nomeSalaServer;
    var cnpjSala = req.body.cnpjSalaServer;
    var tamanhoSala = req.body.tamanhoSalaServer;

    // Faça as validações dos valores
    if (nomeSala == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (cnpjSala == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (tamanhoSala == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarSala(nomeSala, cnpjSala, tamanhoSala)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function registrarFunc(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeNovoFuncionario = req.body.nomeFuncionarioServer;
    var emailNovoFuncionario = req.body.emailFuncionarioServer;
    var senhaNovoFuncionario = req.body.senhaFuncionarioServer;
    var admFuncionario = req.body.administradorFuncionarioServer;
    var empresaFuncionario = req.body.empresaFuncionarioServer;

    // Faça as validações dos valores
    if (nomeNovoFuncionario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailNovoFuncionario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (admFuncionario == undefined) {
        res.status(400).send("Seu administrador está undefined!");
    } else if (empresaFuncionario == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (senhaNovoFuncionario == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.registrarFunc(nomeNovoFuncionario, emailNovoFuncionario, admFuncionario, empresaFuncionario, senhaNovoFuncionario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function alterarSenha(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var novaSenhaFunc = req.body.senhaNovaServer;
    var idFunc = req.body.idFuncionarioServer;

    // Faça as validações dos valores
    if (novaSenhaFunc == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (idFunc == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.alterarSenha(novaSenhaFunc, idFunc)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function captarSalas(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idEmpresa = req.body.fkEmpresaServer;


    // Faça as validações dos valores
    if (idEmpresa == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.captarSalas(idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a consulta! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function captarEndereco(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idEmpresa = req.body.fkEmpresaServer;


    // Faça as validações dos valores
    if (idEmpresa == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.captarEndereco(idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a consulta! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function atualizarAnalytics(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idEmpresa = req.body.fkEmpresaServer;
    var idSala = req.body.fkSalaServer;
    var idEndereco = req.body.fkEnderecoServer;
    var mesAnterior = req.body.mesAnteriorServer;


    // Faça as validações dos valores
    if (idEmpresa == undefined) {
        res.status(400).send("Seu idEmpresa está undefined!");
    }
    else if (idSala == undefined) {
        res.status(400).send("Seu idSala está undefined!");
    }
    else if (idEndereco == undefined) {
        res.status(400).send("Seu idEndereco está undefined!");
    }
    else if (mesAnterior == undefined) {
        res.status(400).send("Seu mesAnterior está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.atualizarAnalytics(idEmpresa, idSala, idEndereco, mesAnterior)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a consulta! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarSala(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeSala = req.body.nomeSalaServer;
    var tamanhoSala = req.body.tamanhoSalaServer;
    var cep = req.body.cepServer;
    var cnpjSala = req.body.cnpjSalaServer;

    // Faça as validações dos valores
    if (nomeSala == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (cnpjSala == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (tamanhoSala == undefined) {
        res.status(400).send("Seu tamanho está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarSala(nomeSala, tamanhoSala, cep,  cnpjSala)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    cadastrarEmpresa,
    registrarFunc,
    alterarSenha,
    captarSalas,
    captarEndereco,
    atualizarAnalytics,
    cadastrarSala
}
