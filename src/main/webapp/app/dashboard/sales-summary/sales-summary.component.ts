import { Component, OnInit, ViewChild } from '@angular/core';
import SharedModule from 'app/shared/shared.module';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

export type salesChartOptions = {
  series: any;
  chart: any;
  xaxis: any;
  yaxis: any;
  stroke: any;
  theme: any;
  tooltip: any;
  dataLabels: any;
  legend: any;
  colors: any;
  markers: any;
  grid: any;
};

@Component({
  standalone: true,
  selector: 'jhi-sales-summary',
  templateUrl: './sales-summary.component.html',
  imports: [NgApexchartsModule, SharedModule],
  styleUrl: './sales-summary.component.scss',
})
export class SalesSummaryComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;

  constructor() {
    this.salesChartOptions = {
      series: [
        {
          name: 'Iphone 13',
          data: [0, 31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'Oneplue 9',
          data: [0, 11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        height: 250,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: '1',
      },
      grid: {
        strokeDashArray: 3,
      },

      xaxis: {
        categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug'],
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }
}
