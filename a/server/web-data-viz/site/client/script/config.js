function registrarFunc() {
    var emailFuncionarioVar = iptEmailFunc.value;
    var nomeFuncionarioVar = iptNomeFunc.value;
    var administradorFuncionarioVar = selectAdministrador.value;
    var empresaFuncionarioVar = sessionStorage.EMPRESA_USUARIO;

    iptEmailFunc.style = 'border-color = #072953;'
    iptNomeFunc.style = 'border-color = #072953;'
    selectAdministrador.style = 'border-color = #072953;'

    if (emailFuncionarioVar == '' || nomeFuncionarioVar == '' || administradorFuncionarioVar == '') {
        alert('Favor digitar os campos corretamente.');
        return false;
    } else if (emailFuncionarioVar.indexOf('@') == -1) {
        alert('Favor digitar o email corretamente.');
        iptEmailFunc.style = 'border-color = red;'
        return false;
    } else if (nomeFuncionarioVar == '') {
        alert('Favor digitar o nome do funcionário');
        iptNomeFunc.style = 'border-color = red;'
        return false;
    } else if (administradorFuncionarioVar == '') {
        alert('Favor escolher se o funcionário é administrador ou não.');
        selectAdministrador.style = 'border-color = red;'
        return false;
    }

    fetch(`/usuarios/registrarFunc`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeFuncionarioServer: nomeFuncionarioVar,
                emailFuncionarioServer: emailFuncionarioVar,
                administradorFuncionarioServer: administradorFuncionarioVar,
                empresaFuncionarioServer: empresaFuncionarioVar
            })
        }).then(function (resposta) {
            console.log('resposta: ', resposta);
            if (resposta.ok) {
                alert('Um novo funcionário foi cadastrado com sucesso!');

                iptEmailFunc.value = ''
                iptNomeFunc.value = ''
                selectAdministrador.value = ''

            } else {
                console.log(resposta)
                alert('Erro ao cadastrar funcionário.');
            }
        }).catch(function (resposta) {
            console.log('erro: ', resposta);
        });
    return false;
}

function alterarSenha() {
    var idFuncionario = sessionStorage.ID_USUARIO;
    var senhaNova = iptSenhaNova.value;

    iptSenhaNova.style = 'border-color = #072953;'
    iptConfSenhaNova.style = 'border-color = #072953;'

    if (senhaNova == '' || senhaNova != iptConfSenhaNova.value) {
        alert('Favor digitar os campos corretamente.');
        iptSenhaNova.style = 'border-color = red;'
        return false;
    }

    fetch(`/usuarios/alterarSenha`,
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                senhaNovaServer: senhaNova,
                idFuncionarioServer: idFuncionario
            })
        }).then(function (resposta) {
            console.log('resposta: ', resposta);
            if (resposta.ok) {
                alert('Sua senha foi alterada com sucesso!');

                iptSenhaNova.value = '';
                iptConfSenhaNova.value = '';
            } else {
                console.log(resposta)
                alert('Erro ao tentar modificar senha.');
            }
        }).catch(function (resposta) {
            console.log('erro: ', resposta);
        });
}
