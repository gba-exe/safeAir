const rosquinha = document.getElementById('rosquinhaTemperatura');
  new Chart(rosquinha, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: ['55','15','15','15'],
        backgroundColor: [
          'rgb(101,163,13)', 'rgb(207,188,15)', 'rgb(207,119,15)','rgb(194,65,12)'
        ],
        borderColor: [
          'rgb(101,163,13)', 'rgb(207,188,15)', 'rgb(207,119,15)','rgb(194,65,12)'
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

const rosquinha1 = document.getElementById('rosquinhaUmidade');
  new Chart(rosquinha1, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: ['55','15','15','15'],
        backgroundColor: [
          'rgb(101,163,13)', 'rgb(207,188,15)', 'rgb(207,119,15)','rgb(194,65,12)'
        ],
        borderColor: [
          'rgb(101,163,13)', 'rgb(207,188,15)', 'rgb(207,119,15)','rgb(194,65,12)'
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
