//função para calcular taxa de absentismo e qtd de dinheiro perdido
function calcular(){
    var modal = document.getElementById("divModal"); //pego a divi que ocupara toda a página qnd clicar no resultado (fundo preto claro)
    // usa o docment.getElementById pois é a forma mais correta de pegar um elemento pelo ID em outra página
    modal.style.display = "flex"; //deixa ela visivel, sai de display block para flex

    var texto = document.getElementById("pTexto");//pego a tag P que não tem nada dentro
    var renda = document.getElementById("iptRendimento").value; // pego o input do rendimento
    var diaPerdido = document.getElementById("iptDiasPerdidos").value;// pego input dos dias perdidos
    var diaTotal = document.getElementById("iptDiasTotal").value;// pego os dias totais

    var taxa = (diaPerdido) / (diaTotal) * 100; //calculo a % de absentismo
    var perda = renda * (taxa/100); // calculo a qtd que a empresa esta perdendo

    texto.innerHTML = ("Sua taxa de absenteísmo é de: " +taxa.toFixed(2)+ "%"); 
    texto.innerHTML +=("<br> O seu prejuízo por ano é de R$ " +perda.toFixed(2));//"toFixed(2)" serve para limitar em duas casas depois da virgula
}

//função para fechar a "telinha branca" com as informações
function fecharModal(){
    var modaal = document.getElementById("divModal");// seleciona a div que ocupa td e estava em preto
    modaal.style.display = "none"; //deixo ela invisivel mudando para display none
}