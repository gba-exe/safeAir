function criar() {

    var empresa = ipt_empresa.value;
    var cliente = ipt_cliente.value;
    var email = ipt_email.value;
    var cnpj = ipt_cnpj.value;
    var senha = ipt_senha.value;
    var confirmacao = ipt_confirmacao.value;
    var erro = false;

    
    if (empresa == "") {
        alert("Por favor, insira o nome da empresa.")
        ipt_empresa.style = "border-color: red;"
        var erro = true
    } else {
        ipt_empresa.style = "border-color: green;"
    }

    if (cliente == "") {
        alert("Por favor, insira o nome do cliente.")
        ipt_cliente.style = "border-color: red;"
        var erro = true
    } else {
        ipt_cliente.style = "border-color: green;"
    }
    
    if (email == "" || email.indexOf('@') < 0) {
        alert("Por favor, insira o e-mail corretamente.")
        ipt_email.style = "border-color: red;"
        var erro = true
    } else {
        ipt_email.style = "border-color: green;"
    }

    if (cnpj == "") {
        alert("Por favor, insira o CNPJ corretamente.")
        ipt_cnpj.style = "border-color: red;"
        var erro = true
    } else {
        ipt_cnpj.style = "border-color: green;"
    }
    
    if (senha == "" || senha.length < 8) {
        alert("Por favor, insira uma senha com, no mínimo, 8 caracteres.")
        ipt_senha.style = "border-color: red;"
        var erro = true
    } else {
        ipt_senha.style = "border-color: green;"
    }
    
    if (confirmacao != senha || confirmacao == "") {
        alert("As senhas não estão idênticas.")
        ipt_confirmacao.style = "border-color: red;"
        var erro = true
    } else {
        ipt_confirmacao.style = "border-color: green;"
    }

    if (erro == true) {
        alert("Favor corrigir o(s) dado(s) de entrada para seguirmos em frente")
    } else {
        alert("Cadastrado com sucesso!");
        
        //limpando os campos qnd tudo for respondido corretamente
        ipt_empresa.value = "";
        ipt_cliente.value = "";
        ipt_email.value = "";
        ipt_cnpj.value = "";
        ipt_senha.value = "";
        ipt_confirmacao.value = "";
        
        //borda dos inputs padrão qnd tudo for respondido corretamente
        ipt_empresa.style = "border-color: #072953;"
        ipt_cliente.style = "border-color: #072953;"
        ipt_email.style = "border-color: #072953;"
        ipt_cnpj.style = "border-color: #072953;"
        ipt_senha.style = "border-color: #072953;"
        ipt_confirmacao.style = "border-color: #072953;"
    }
}


