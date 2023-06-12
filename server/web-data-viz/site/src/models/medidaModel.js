var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select temperatura, umidade,
                        DATE_FORMAT(dataHr,'%H:%i:%s') as dataHr_grafico, 
                        fkSensor 
                        from dados where fkSensor = ${idSensor} 
                    order by idDado desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select temperatura, umidade,
                        DATE_FORMAT(dataHr,'%H:%i:%s') as dataHr_grafico, 
                        fkSensor 
                        from dados where fkSensor = ${idSensor} 
                    order by idDado desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}