function calculo() {
  //declaração de variaveis
  var horasDia = Number(iptHorasDia.value);
  var diasMes = Number(iptDiasMes.value);
  var consumoAparelho = Number(iptConsumoAparelho.value);
  var precEnergia = Number(iptPreçoEnergia.value);

  //calculando a quantidade de horas o mes
  var horasMes = horasDia * diasMes;

  //calculando o consumo por dia
  var consumoDia = consumoAparelho / 30;

  //calculando quanto sera gastado
  var resConsumo = Math.round((horasMes * consumoDia * precEnergia)*100)/100;

  if (resConsumo > 0) {
    txtValorAoVivo.innerHTML = `R$ ${resConsumo.toFixed(2)}`;
  } else {
    txtValorAoVivo.innerHTML = `R$ 0.00`;
  }
}






