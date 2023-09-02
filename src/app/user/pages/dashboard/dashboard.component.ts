import { Component } from '@angular/core';
declare let ApexCharts: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  ngAfterViewInit() {
    let options1 = {
      chart: {
        height: 230,
        type: "line",
        shadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 1
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#786BED", "#999b9c"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      series: [{
        name: "High - 2019",
        data: [5, 15, 14, 36, 32, 32]
      },
      {
        name: "Low - 2019",
        data: [7, 11, 30, 18, 25, 13]
      }
      ],
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.0
        }
      },
      markers: {
        size: 6
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

        labels: {
          style: {
            colors: "#9aa0ac"
          }
        }
      },
      yaxis: {
        title: {
          text: "Income"
        },
        labels: {
          style: {
            color: "#9aa0ac"
          }
        },
        min: 5,
        max: 40
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
    let chart1 = new ApexCharts(
      document.querySelector("#chart1"),
      options1
    );
    chart1.render();


    var options2 = {
      chart: {
        height: 250,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20px',
        },
      },
      series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14]
      }],
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2019 GMT', '01/02/2019 GMT', '01/03/2019 GMT', '01/04/2019 GMT', '01/05/2019 GMT', '01/06/2019 GMT'],
        labels: {
          style: {
            colors: "#9aa0ac"
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            color: "#9aa0ac"
          }
        }
      },
      legend: {
        position: 'top',
        offsetY: 40,
        show: false,
      },
      fill: {
        opacity: 1
      },
    }
    let chart2 = new ApexCharts(
      document.querySelector("#chart2"),
      options2
    );
    chart2.render();


    let options3 = {
      chart: {
        height: 250,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },

      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      series: [{
        name: "Option 1",
        data: [45, 52, 38, 24, 33, 26, 21, 20]
      },
      {
        name: "Option 2",
        data: [35, 41, 62, 42, 13, 18, 29, 37]
      },
      {
        name: 'Option 3',
        data: [87, 57, 74, 99, 75, 38, 62, 47]
      }
      ],
      legend: {
        show: false,
      },
      markers: {
        size: 0,

        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'
        ],
        labels: {
          style: {
            colors: "#9aa0ac"
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            color: "#9aa0ac"
          }
        }
      },
      tooltip: {

      },
      grid: {
        borderColor: '#f1f1f1',
      }
    };
    let chart3 = new ApexCharts(
      document.querySelector("#chart3"),
      options3
    );
    chart3.render();


    let options4 = {
      chart: {
        height: 250,
        type: 'area',
        toolbar: {
          show: false
        },

      },
      colors: ['#999b9c', '#4CC2B0'], // line color
      fill: {
        colors: ['#999b9c', '#4CC2B0'] // fill color
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      markers: {
        colors: ['#999b9c', '#4CC2B0'] // marker color
      },
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 22, 64, 80]
      }, {
        name: 'series2',
        data: [11, 32, 67, 32, 44, 52, 41]
      }],
      legend: {
        show: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
        labels: {
          style: {
            colors: "#9aa0ac"
          }
        },
      },
      yaxis: {
        labels: {
          style: {
            color: "#9aa0ac"
          }
        }
      },
    };
    let chart4 = new ApexCharts(
      document.querySelector("#chart4"),
      options4
    );
    chart4.render();

  }
}
