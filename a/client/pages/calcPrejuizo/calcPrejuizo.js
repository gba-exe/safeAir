function calcular(){

    var salario = document.getElementById("iptSalario").value; // pego o salario medio
    var funcionarios = document.getElementById("iptFuncionarios").value;// pego qtd de funcionários
    var taxa = document.getElementById("iptTaxa").value;// pego a taxa

    taxa = taxa / 100 //transforma a taxa que antes estava em decimal para %

    var perda = taxa * funcionarios * salario * 12 //calcula a perda

    alert ("O seu prejuízo por ano é de R$ " +perda.toFixed(2));//"toFixed(2)" serve para limitar em duas casas depois da virgula
}