function cadastrarEmpresa() {
    var nome = iptNomeEmpresa.value;
    var cnpj = iptCNPJ.value;

if (nome == '' || cnpj == '' || cnpj <14 || cnpj >18) {
    alert('Favor informar os campos corretamente')
    return false;
}

fetch('/usuarios/cadastrar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
        nomeEmpresaServer: nome,
        nomeCNPJServer: cnpj,

    })
})
}
