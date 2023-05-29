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
    var admFunc = req.body.administradorServer;
    var empresaFunc = req.body.empresaServer;

    // Faça as validações dos valores
    if (nomeFunc == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailFunc == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaFunc == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (admFunc == undefined) {
        res.status(400).send("Seu administrador está undefined!");
    } else if (empresaFunc == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeFunc, emailFunc, senhaFunc, admFunc, empresaFunc)
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

    // Faça as validações dos valores
    if (nome_Empresa == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarEmpresa(nome_Empresa, cnpj)
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

// function pegarID(req, res) {
//     for (var i = 0; i < x.length; i++) {
//         divSelect.innerHtml +=
//             `
//         <select name="selectEmpresa" id="selEmpresa}">
//             <option>Selecione uma opção</option>
//             <option value="response.id">${response.nome[i]}</option>
//         </select>

//         `
//     }

//     fetch(`/usuarios/pegarId`)
//         .then(response => {
//             id = response.id
//             console.log(response)
//         })
//         .catch(() => {
//             console.log("deu erro fetch api cep")
//         })
// }

module.exports = {
    entrar,
    // pegarID,
    cadastrar,
    listar,
    testar,
    cadastrarEmpresa
}