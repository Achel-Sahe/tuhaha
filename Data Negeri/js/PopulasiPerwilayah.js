     const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Lingkungan 1', 'Lingkungan 2', 'Lingkungan 3', 'Lingkungan 4'],
      datasets: [{
        label: 'Jumlah jiwa',
        data: [372, 98, 71, 80],
        backgroundColor: [
          'rgba(161, 0, 0, 0.8)',
          'rgba(161, 0, 0, 0.8)',
          'rgba(161, 0, 0, 0.8)',
          'rgba(161, 0, 0, 0.8)',
        ],
        borderWidth: 1
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