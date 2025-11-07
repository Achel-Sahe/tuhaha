     const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Perempuan', 'Lelaki'],
      datasets: [{
        label: 'Jenis Kelamin',
        data: [964, 1018],
        backgroundColor: [
          'rgba(209, 0, 178, 0.58)',
          'rgba(0, 134, 161, 0.58)'
        ],
        borderWidth: 5
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