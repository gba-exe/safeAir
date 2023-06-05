//Colocando o menu dos Dashboards em JS
const header = document.createElement('template');

header.innerHTML = `
<div id="navMenu">
        <ul>
            <li>
                <button onclick="menu()"><img src="../../assets/menu.png"></button>
            </li>
            <li>
                <hr>
            </li>
            <li class='liMenus'>
                <a href="../../pages/admSafeAir/admSafeAir.html">
                    <img src="../../assets/conexões.png" alt="">
                    <span id="menuClientes" class="spanLink">Cadastrar Clientes</span>
                </a>
            </li>
            <li class='liMenus'>
                <a href="../../pages/admSafeAir/admSalas.html">
                    <img src="../../assets/sala.png" alt="">
                    <span id ="menuSalas" class="spanLink">+ Salas</span>
                </a>
            </li>        
            <li class='liMenus'>
                <a href="../../pages/admSafeAir/admSimulacaoConsumo.html">
                    <img src="../../assets/calculadora 1.png" alt="">
                    <span id ="menuSimulacoes" class="spanLink">Simulação</span>
                </a>
            </li>        
            <li class='liMenus'> 
                <a href="https://safeair.atlassian.net/jira/servicedesk/projects/SAF/section/problems/custom/14">
                    <img src="../../assets/suporteIcon.png" alt="">
                    <span id="menuHelpDesk" class="spanLink">Help Desk</span>
                </a>
            </li>
            <li class='liMenus'>
                <a href="../../pages/admSafeAir/admFuncionario.html">
                    <img src="../../assets/cadastro.png" alt="">
                    <span id="menuSetting" class="spanLink">Cadastro Safe Air</span>
                </a>
            </li>
            <li class='liMenus'>
                <a href="../../pages/Login/Login.html">
                    <img src="../../assets/logoutIcon.png" alt="">
                    <span id="menuLogout" class="spanLink">Log Out</span>
                </a>
            </li>
        </ul>
    </div>
    `
document.body.appendChild(header.content);

//Função para o menu funcionar
var cont = 0 //Variavel para ver condição do menu

    function menu(){
        if(cont == 0){
            //Tirar os nomes
            menuLogout.style.display = "none";
            menuClientes.style.display = "none";
            menuHelpDesk.style.display = "none";
            menuSetting.style.display = "none";
            menuSimulacoes.style.display = "none";
            menuSalas.style.display = "none";
            
            //Mudar tamanho das divs
            navMenu.style.width = "8%";
            divDashboard.style.width = "92%"
            
            //Mudar condição da variavel
            cont = 1;
        }else{
            menuLogout.style.display = "block";
            menuClientes.style.display = "block";
            menuHelpDesk.style.display = "block";
            menuSetting.style.display = "block";
            menuSimulacoes.style.display = "block";
            menuSalas.style.display = "block";

            divDashboard.style.width = "80%"
            navMenu.style.width = "20%";
            
            cont = 0;
        }
    }