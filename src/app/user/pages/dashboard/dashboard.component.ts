import { Component } from '@angular/core';
declare let chart1: any;
declare let chart2: any;
declare let chart3: any;
declare let chart4: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  ngAfterViewInit() {
    chart1();
    chart2();
    chart3();
    chart4();
  }
}
