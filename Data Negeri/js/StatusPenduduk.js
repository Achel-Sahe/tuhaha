 Highcharts.chart('container', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Grafik Rentang Umur Negeri Tuhaha'
      },
      plotOptions: {
        pie: {
          innerSize: '8%',
          depth: 45
        }
      },
      series: [{
        name: 'Jumlah Jiwa',
        data: [
          { name: 'Tidak Tetap', y: 0 },
          { name: 'Belum Disi', y: 0 },
          { name: 'Tetap', y: 1323},
        ]
      }],
      credits: {
        enabled: false
      }
    });