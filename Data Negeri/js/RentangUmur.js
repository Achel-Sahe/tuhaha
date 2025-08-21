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
        name: 'Persentase',
        data: [
          { name: 'A', y: 40 },
          { name: 'B', y: 30 },
          { name: 'C', y: 20 },
          { name: 'Lainnya', y: 10 }
        ]
      }],
      credits: {
        enabled: false
      }
    });