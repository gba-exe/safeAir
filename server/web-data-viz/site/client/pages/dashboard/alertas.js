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
    var temp = Number(resposta[0].temperatura);
    var umid = Number(resposta[0].umidade);



    console.log(idSensor === resposta[0].fkSensor);


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


    var criticoQuente = temp >= limites_temp.critico_quente;
    var emergenciaQuente = temp >= limites_temp.emergencia_quente;
    var alertaQuente = temp >= limites_temp.alerta_quente;
    var alertaFrio = temp <= limites_temp.alerta_frio;
    var emergenciaFrio = temp <= limites_temp.emergencia_frio;
    var criticoFrio = temp <= limites_temp.critico_frio;

    if (criticoQuente) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Crítico</h1>
            <p style="background-color: red; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${temp} ºC</p>
            <h1>${idSensor}</h1>
        </div>`;
    } else if (emergenciaQuente) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Emergência</h1>
            <p style="background-color: orange; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${temp} ºC</p>
        </div>`;
    } else if (alertaQuente) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Alerta</h1>
            <p style="background-color: yellow; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${temp} ºC</p>
        </div>`;
    }

    if (criticoFrio) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Critico</h1>
            <p style="background-color: red; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${temp} ºC</p>
        </div>`;
    } else if (emergenciaFrio) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Emergência</h1>
            <p style="background-color: orange; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${temp} ºC</p>
        </div>`;
    } else if (alertaFrio) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Alerta</h1>
            <p style="background-color: yellow; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${temp} ºC</p>
        </div>`;
    }

    var criticoUmido = umid >= limites_umid.critico_umido;
    var emergenciaUmido = umid >= limites_umid.emergencia_umido;
    var alertaUmido = umid >= limites_umid.alerta_umido;
    var alertaSeco = umid <= limites_umid.alerta_seco;
    var emergenciaSeco = umid <= limites_umid.emergencia_seco;
    var criticoSeco = umid <= limites_umid.critico_seco;

    if (criticoUmido) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Critico</h1>
            <p style="background-color: red; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${umid.toFixed()} %</p>
        </div>`;
    } else if (emergenciaUmido) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Emergência</h1>
            <p style="background-color: orange; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${umid.toFixed()} %</p>
        </div>`;
    } else if (alertaUmido) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Alerta</h1>
            <p style="background-color: yellow; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${umid.toFixed()} %</p>
        </div>`;
    }

    if (criticoSeco) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Crítico</h1>
            <p style="background-color: red; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${umid.toFixed()} %</p>
        </div>`;
    }
    else if (emergenciaSeco) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Emergência</h1>
            <p style="background-color: orange; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${umid.toFixed()} %</p>
        </div>`;
    } else if (alertaSeco) {
        divAlerta.innerHTML += `
        <div class="divConteudo">
            <h1>Alerta</h1>
            <p style="background-color: yellow; border-radius: 10px; width: 50%; height: 50%; font-size: 3vh;">${umid.toFixed()} %</p>
        </div>`;
    }

    if (alertas.length >= 4){
        alertas = [];
    }
}