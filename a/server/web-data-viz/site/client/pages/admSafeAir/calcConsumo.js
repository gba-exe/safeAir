function calculo() {

  //declaração de variaveis
  let select = document.querySelector('#btus');
  let optionValue = select.options[select.selectedIndex]
  let potencia = Number(select.value);


  var horasDia = Number(iptHorasDia.value);
  var diasMes = Number(iptDiasMes.value);


  let select1 = document.querySelector('#cidades');
  let optionValue1 = select1.options[select1.selectedIndex]
  let cidade = select1.value;
  var preco = 0


  //Atribuindo a cidade ao preço da energia

  if (cidade == "sp") {

    preco = 0.656

  } else if (cidade == "rj") {

    preco = 0.754

  } else if (cidade == "bh") {

    preco = 0.653

  } else if (cidade == "go") {

    preco = 0.671

  }



  //calculando a quantidade de horas o mes
  var horasMes = horasDia * diasMes;


  //calculando o kwh/Mês
  var kwhMes = (horasMes * potencia) / 1000;


  //calculando o consumo total
  var resConsumo = Math.round(kwhMes * preco);


  if (resConsumo > 0) {
    txtValorAoVivo.innerHTML = `R$ ${resConsumo.toFixed(2)}`;
  } else {
    txtValorAoVivo.innerHTML = `R$ 0.00`;
  }
}






