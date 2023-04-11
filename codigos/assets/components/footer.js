const footer = document.createElement('template');

footer.innerHTML = `
<footer>
<div class="padraoRodape divLogoEmpresa">
    <img src="../../../logos/logoSemFundoMenor.png" alt="">
    <p>© 2023 SafeAir, Inc. Todos os direitos reservados.</p>
</div>
<div class="divLinha"></div>
<div class="padraoRodape divNavegue">
    <h1>Navegue</h1>
    <a class="aZoom" href="#">Serviços</a>
    <a class="aZoom" href="../produto/produtos.html">Produto</a>
    <a class="aZoom" href="../calcPrejuizo/calcPrejuizo.html">Calculadora</a>
</div>
<div class="divLinha"></div>
<div class="padraoRodape">
    <h1>Contatos</h1>
    <p class="aZoom">Whatsapp</p>
    <p class="aZoom">Telefone</p>
</div>
<div class="divLinha"></div>
<div class="padraoRodape">
    <h1>Institucional</h1>
    <a class="aZoom" href="../SobreNós/sobreNos.html">Sobre Nós</a>
    <p class="aZoom">Telefone</p>
</div>
</footer>
`

document.body.appendChild(footer.content);