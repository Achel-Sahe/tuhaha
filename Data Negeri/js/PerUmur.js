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
          { name: 'Belum Mengisi', y: 5 },
          { name: 'Balita (0 - 5)', y: 10 },
          { name: 'Anak-anak (6 - 17)', y: 50 },
          { name: 'Dewasa (18 - 30)', y: 60 },
          { name: 'Tua (31 - 100)', y: 80 },
        ]
      }],
      credits: {
        enabled: false
      }
    });