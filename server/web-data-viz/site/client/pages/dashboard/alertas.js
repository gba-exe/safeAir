var alertas = [];

function obterdados(idSensor) {
    fetch(`/medidas/tempo-real/${idSensor}`)
        .then(resposta => {

            if (resposta.ok) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idSensor);
                });
            } else {

                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados da sala p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idSensor) {
    var temp = resposta[0].temperatura;


    console.log(idSensor === resposta[0].fkSensor)

    var grauDeAviso = '';


    var limites_temp = {
        critico_quente: 30,
        emergencia_quente: 27,
        alerta_quente: 25,
        ideal_max: 23,
        ideal_min: 20,
        alerta_frio: 18,
        emergencia_frio: 16,
        critico_frio: 14
    };

    var limites_umid = {
        critico_umido: 75,
        emergencia_umido: 60,
        alerta_umido: 55,
        ideal_max: 50,
        ideal_min: 40,
        alerta_seco: 35,
        emergencia_seco: 30,
        critico_seco: 25
    }

    var classe_temperatura = 'cor-alerta';
    /*     var card;
        card.className = classe_temperatura; */

    var criticoQuente = temp >= limites_temp.critico_quente;
    var emergenciaQuente = temp >= limites_temp.emergencia_quente;
    var alertaQuente = temp >= limites_temp.alerta_quente;
    var idealTemp = temp >= limites_temp.ideal_max && temp <= limites_temp.ideal_min;
    var alertaFrio = temp <= limites_temp.alerta_frio;
    var emergenciaFrio = temp <= limites_temp.emergencia_frio;
    var criticoFrio = temp <= limites_temp.critico_frio;
        
    if (criticoQuente) {
        alert('quente')
    } else if (emergenciaQuente) {
        alert('vampeta')
    } else if (alertaQuente) {
        alert('santos')
    }

    if (idealTemp) {
        alert('tudu serto')
    }

    if (criticoFrio) {
        alert('Frio')
    } else if (emergenciaFrio) {
        alert('Gelado')
    } else if (alertaFrio) {
        alert('Sampa')
    }

    var criticoUmido = temp >= limites_umid.critico_umido;
    var emergenciaUmido = temp >= limites_umid.emergencia_umido;
    var alertaUmido = temp >= limites_umid.alerta_umido;
    var idealUmid = temp >= limites_umid.ideal_max && temp <= limites_umid.ideal_min;
    var alertaSeco = temp <= limites_umid.alerta_seco;
    var emergenciaSeco = temp <= limites_umid.emergencia_seco;
    var criticoSeco = temp <= limites_umid.critico_seco;

    if (criticoUmido) {
        alert('Umido')
    } else if (emergenciaUmido) {
        alert('moiadu')
    } else if (alertaUmido) {
        alert('santos')
    }

    if (idealUmid) {
        alert('tudu serto')
    }

    if (criticoSeco) {
        alert('Seco')
    } else if (emergenciaSeco) {
        alert('sequinho')
    } else if (alertaSeco) {
        alert('Sampa')
    }

    var classe_umidade = 'cor-alerta';
    /*     var card;
        card.className = classe_temperatura; */
}

function exibirAlerta(temp, idSensor, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idSensor == idSensor);

    if (indice >= 0) {
        alertas[indice] = { idSensor, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idSensor, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();

    // Dentro da div com classe grauDeAvisoCor há um caractere "invisível", 
    // que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
}

function removerAlerta(idSensor) {
    alertas = alertas.filter(item => item.idSensor != idSensor);
    exibirCards();
}

function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idSensor, temp, grauDeAviso, grauDeAvisoCor }) {
    return `<div class="mensagem-alarme">
    <div class="informacao">
    <div class="${grauDeAvisoCor}">&#12644;</div> 
     <h3>Aquário ${idSensor} está em estado de ${grauDeAviso}!</h3>
    <small>Temperatura ${temp}.</small>   
    </div>
    <div class="alarme-sino"></div>
    </div>`;
}
