function calcular(){

    var renda = document.getElementById("iptRendimento").value; // pego o input do rendimento
    var diaPerdido = document.getElementById("iptDiasPerdidos").value;// pego input dos dias perdidos
    var diaTotal = document.getElementById("iptDiasTotal").value;// pego os dias totais

    var taxa = (diaPerdido) / (diaTotal) * 100; //calculo a % de absentismo
    var perda = renda * (taxa/100); // calculo a qtd que a empresa esta perdendo

    alert ("Sua taxa de absenteísmo é de: " +taxa.toFixed(2)+ "% \n O seu prejuízo por ano é de R$ " +perda.toFixed(2));//"toFixed(2)" serve para limitar em duas casas depois da virgula
}