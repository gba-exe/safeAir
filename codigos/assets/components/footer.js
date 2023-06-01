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
    <a class="aZoom" href="../calcConsumo/calcConsumo.html"><p>Serviços</p></a>
    <a class="aZoom" href="../produto/produtos.html"><p>Produto</p></a>
    <a class="aZoom" href="../calcPrejuizo/calcPrejuizo.html"><p>Calculadora</p></a>
</div>
<div class="divLinha"></div>
<div class="padraoRodape">
    <h1>Contatos</h1>
    <a class="aZoom" href="../dashboard/dashboard.html"><p>Whatsapp</p></a>
    <a class="aZoom" href="#"><p>Telefone</p></a>
</div>
<div class="divLinha"></div>
<div class="padraoRodape">
    <h1>Institucional</h1>
    <a class="aZoom" href="../SobreNós/sobreNos.html"><p>Sobre Nós</p></a>
    <a class="aZoom" href="#"><p>Telefone</p></a>
</div>
</footer>
`

document.body.appendChild(footer.content);