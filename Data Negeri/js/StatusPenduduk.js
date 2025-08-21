     const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Tetap', 'Tidak Tetap'],
      datasets: [{  
        label: 'Jenis Kelamin',
        data: [80, 0],
        backgroundColor: [
            'rgba(209, 0, 0, 0.58)',
            'rgba(223, 223, 223, 0.58)'
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