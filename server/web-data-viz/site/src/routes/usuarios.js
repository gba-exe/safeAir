var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarEmpresa", function (req, res) {
    usuarioController.cadastrarEmpresa(req, res);
})
router.post("/cadastrarSala", function (req, res) {
    usuarioController.cadastrarSala(req, res);
})

router.post("/registrarFunc", function (req, res) {
    usuarioController.registrarFunc(req, res);
})

router.post("/alterarSenha", function (req, res) {
    usuarioController.alterarSenha(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
router.post("/captarSalas", function (req, res) {
    usuarioController.captarSalas(req, res);
});
router.post("/captarEndereco", function (req, res) {
    usuarioController.captarEndereco(req, res);
});
router.post("/atualizarAnalytics", function (req, res) {
    usuarioController.atualizarAnalytics(req, res);
});

module.exports = router;