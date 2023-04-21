const temperatura = document.getElementById('temperaturaProblema');

  new Chart(temperatura, {
    type: 'line',
    data: {
      labels: ['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'],
      datasets: [{
        label: 'Temperatura - Sala 2',
        data: [18, 19, 23, 25, 22, 26,18, 20, 23, 25, 25, 26,18, 15, 14, 13, 15, 20, 19, 22, 23, 21, 20, 22],
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
      }
    }
  });

const umidade = document.getElementById('umidadeProblema');
  new Chart(umidade, {
    type: 'line',
    data: {
      labels: ['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'],
      datasets: [{
        label: 'Umidade - Sala 2',
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
      }
    }
});

const rosquinha = document.getElementById('rosquinhaSalas');
  new Chart(rosquinha, {
    type: 'doughnut',
    data: {
      labels: ['Salas Com Problemas','Salas Normais'],
      datasets: [{
        data: [2,6],
        backgroundColor: [
          'rgb(218, 42, 80)','rgb(54, 162, 235)'
        ],
        borderColor: [
          '#072953'
        ],
        borderWidth: 1
      }]
    },
    options: {
      cutoutPercentage: 100,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 18
                    }
                }
            }
        }

    }
  });