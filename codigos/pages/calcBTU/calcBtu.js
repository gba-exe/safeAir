function calBtu() {
    let quantidade = Number(iptQuantidade.value);
    let area = Number(iptArea.value);
    let qtdPessoas = Number(iptQuantidadePessoas.value);
    let eletronicos = Number(iptEletronico.value);
  
    let btuTotal = (area * 600) + (qtdPessoas * 600 - 600) + (eletronicos * 600) * quantidade;
    resBtu =  Math.ceil(btuTotal/1000)*1000;
  
    /* let valorLive = document.getElementById("valorLive"); */
    if (btuTotal > 0) {
        valorLive.innerHTML = resBtu.toFixed(2)
    } else {
        valorLive.innerHTML = 0;
    }
  }