     const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Warga Negara Indonesia', 'Warga asing'],
      datasets: [{
        label: 'Jenis Kelamin',
        data: [1000, 0],
        backgroundColor: [
          'rgba(193, 2, 2, 0.85)',
          'rgba(224, 224, 224, 0.58)'
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