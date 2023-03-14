function calculo() {
  let horasDia = Number(iptHorasDia.value);
  let diasMes = Number(iptDiasMes.value);
  let consumoAparelho = Number(iptConsumoAparelho.value);
  let precEnergia = Number(iptPreçoEnergia.value);
  let horasMes = horasDia * diasMes;
  let consumoDia = consumoAparelho / 30;
  let calculo = Math.round((horasMes * consumoDia * precEnergia)*100)/100;
  if (calculo > 0) {
    txtValorAoVivo.innerHTML = `R$ ${calculo}`;
  } else {
    txtValorAoVivo.innerHTML = `R$ 0.00`;
  }
}
