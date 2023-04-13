const header = document.createElement('template');

header.innerHTML = `
<header id="divMenu">
        <a href="../home/home.html"><img class="liZoom" src="../../../logos/logoSemFundoMaior.png" alt=""></a>
        <ul>
            <li class="liZoom"><a href="../calcConsumo/calcConsumo.html">Serviços</a></li>
            <li class="liZoom"><a href="../produto/produtos.html">Produto</a></li>
            <li class="liZoom"><a href="../calcPrejuizo/calcPrejuizo.html">Calculadora</a></li>
            <li class="liZoom"><a href="../SobreNós/sobreNos.html">Sobre Nós</a></li>
            <li>|</li>
            <button class="liZoom btnLoginIn"><a href="../Login/Login.HTML">Login In</a></button>
            <button class="liZoom btnSignUp"><a href="../cadastroFuncionarios/cadastrofuncionarios.html">Cadastro</a></button>
        </ul>
    </header>
    `

document.body.appendChild(header.content);