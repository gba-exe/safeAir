function calcular(){
    var modal = document.getElementById("divModal");
    modal.style.display = "flex";

    var texto = document.getElementById("pTexto");
    var renda = document.getElementById("iptRendimento").value;
    var diaPerdido = document.getElementById("iptDiasPerdidos").value;
    var diaTotal = document.getElementById("iptDiasTotal").value;

    var taxa = (diaPerdido) / (diaTotal) * 100;
    var perda = renda * (taxa/100);

    texto.innerHTML = ("Sua taxa de absenteísmo é de: " +taxa.toFixed(2)+ "%");
    texto.innerHTML +=("<br> O seu prejuízo por ano é de R$ " +perda.toFixed(2));
}

function fecharModal(){
    var modaal = document.getElementById("divModal");
    modaal.style.display = "none";
}