const temperatura = document.getElementById('temperaturaSalas');

  new Chart(temperatura, {
    type: 'line',
    data: {
      labels: ['Diretoria','Descanso','Refeitório','Biblioteca','T.I.','Reunião','Conferência','Hall','Secretaria'],
      datasets: [{
        label: 'Temperatura das Salas - °C',
        data: [18, 19, 23, 25, 22, 26,18, 20, 23],
        backgroundColor: [
            '#f04600'
        ],
        borderColor: [
          '#f04600'
        ],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          labels: {
              font: {
                  size: 16
              }
          }
        }
      }
    }
  });

const umidade = document.getElementById('umidadeSalas');
  new Chart(umidade, {
    type: 'line',
    data: {
      labels: ['Diretoria','Descanso','Refeitório','Biblioteca','T.I.','Reunião','Conferência','Hall','Secretaria'],
      datasets: [{
        label: 'Umidade das Salas - %',
        data: [40, 49, 43, 45, 50, 56, 48, 40, 40, 45, 35, 36, 38, 40, 44, 53, 55, 57, 60, 62, 50, 45, 40, 42],
        backgroundColor: [
            '#072953'
        ],
        borderColor: [
            '#072953'
        ],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          labels: {
              font: {
                  size: 16
              }
          }
        }
      }
    }
});