  let canvas = document.querySelector('#soda-chart')

  let context = canvas.getContext('2d')

   chart = new Chart(context, {
      type: 'bar',
      data:{
          labels: ['coke', 'pepsi', 'either', 'neither'],
          datasets:[{
              label:'number of votes',
              data:[17, 15, 6, 11 ],
              backgroundColor:['green', 'blue', 'yellow', 'red']
          }]
      },
      options:{
          scales:{
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  }
              }]
          }
      }
  })