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
                <a href="#">
                    <img src="../../assets/dashboardIcon.png" alt="">
                    <span id="menuDashboard" class="spanLink">Dashboard</span>
                </a>
            </li>
            <li class='liMenus'>
                <a href="#">
                    <img src="../../assets/analyticsIcon.png" alt="">
                    <span id="menuAnalytics" class="spanLink">Analytics</span>
                </a>
            </li>
            <li class='liMenus'> 
                <a href="#">
                    <img src="../../assets/suporteIcon.png" alt="">
                    <span id="menuHelpDesk" class="spanLink">Help Desk</span>
                </a>
            </li>
            <li class='liMenus'>
                <a href="#">
                    <img src="../../assets/configuracaoIcon.png" alt="">
                    <span id="menuSetting" class="spanLink">Settings</span>
                </a>
            </li>
            <li class='liMenus'>
                <a href="#">
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
            menuDashboard.style.display = "none";
            menuHelpDesk.style.display = "none";
            menuSetting.style.display = "none";
            menuAnalytics.style.display = "none";
            
            //Mudar tamanho das divs
            navMenu.style.width = "8%";
            divDashboard.style.width = "92%"
            
            //Mudar condição da variavel
            cont = 1;
        }else{
            menuLogout.style.display = "block";
            menuDashboard.style.display = "block";
            menuHelpDesk.style.display = "block";
            menuSetting.style.display = "block";
            menuAnalytics.style.display = "block";

            divDashboard.style.width = "80%"
            navMenu.style.width = "20%";
            
            cont = 0;
        }
    }