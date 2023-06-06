const header = document.createElement('template');

header.innerHTML = `
<header id="divMenu">
        <a href="../../index.html"><img class="liZoom" src="../../assets/logos/logoSemFundoMaior.png" alt=""></a>
        <ul>
            <li class="liZoom"><a href="https://safeair.atlassian.net/servicedesk/customer/portal/1">Suporte</a></li>
            <li class="liZoom"><a href="../produto/produtos.html">Produto</a></li>
            <li class="liZoom"><a href="../calcPrejuizo/calcPrejuizo.html">Calculadora</a></li>
            <li class="liZoom"><a href="../SobreNós/sobreNos.html">Sobre Nós</a></li>
            <li>|</li>
            <button class="liZoom btnLoginIn"><a href="../Login/Login.html">Login</a></button>
        </ul>
    </header>
    `

document.body.appendChild(header.content);