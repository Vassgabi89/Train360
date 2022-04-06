import { Component, OnInit} from '@angular/core';
import { filter, Observable, toArray, map, reduce, switchMap, } from 'rxjs';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(
  ) { }



  startAnimationForLineChart(chart: any) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data: any) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };


  startAnimationForBarChart(chart: any) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data: any) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };


  ngOnInit(): void {
  }

  // Számértékek a Dashboard-ra
  orderNumberByStatus_data$: any;
  lastFiveOrderArray: any;

  increasePercent: number = 0;

  incomeBillSum: any;
  newBillSum: any;
  allBillSum: any;




  newOrder_data$: any;
  // shippedOrder_data: any;
  // paidOrder_data: any;
  // orderSum_data: any;





  // showLastOrderIncome
  showLastOrderIncome(dataX?: any, dataY?: any) {
    const data: any = {
      labels: dataX,
      series: [dataY]
    };

    const optionslastOrderIncome = {
      axisX: {
        showGrid: false
      },
      axisY: {
        offset: 80,
        labelInterpolationFnc: function (value: any) {
          return value / 1000 + 'k EUR'
        },
        scaleMinSpace: 15
      },
      low: 0,
      chartPadding: { top: 25, right: 0, bottom: 0, left: 0 },
    };
    const responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value: any) {
            return value[0];
          }
        }
      }]
    ];
    const lastOrderIncome = new Chartist.Bar('#lastOrderIncome', data, optionslastOrderIncome, responsiveOptions);
    lastOrderIncome;
    //this.startAnimationForBarChart(lastOrderIncome);
  }

  // showLastOrderDetail
  showLastOrderCumulativeSum(dataX?: any, dataY?: any) {
    const data: any = {
      labels: dataX,
      series: [dataY]
    };

    const optionsOrderCumulativeSum: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 2
      }),
      low: 0,
      chartPadding: { top: 25, right: 0, bottom: 0, left: 0 },

      axisY: {
        offset: 80,
        labelInterpolationFnc: function (value: any) {
          return value / 1000 + 'k EUR'
        },
        scaleMinSpace: 15
      }
    }

    const lastOrderCumulativeSum = new Chartist.Line('#lastOrderCumulativeSum', data, optionsOrderCumulativeSum);

    lastOrderCumulativeSum;
    //this.startAnimationForLineChart(lastOrderCumulativeSum);
  }


  //----------------------------------------------------------------------------
  showProductRangePieChart(orderData: number[]) {
    const data = {
      series: [orderData[0], orderData[1], orderData[2], orderData[3], orderData[4]]
    };

    const options = {
      labelInterpolationFnc: function (value: any, idx: any) {
        return Math.round(data.series[idx] / data.series.reduce((a, b) => a + b) * 100) + '%';
      }
    };

    new Chartist.Pie('#productRangePieChart', data, options);
  }


  showProductRangeBarCart(orderData: number[]) {
    const data = {
      labels: ['Living room', 'Bedroom', 'Bathroom', 'Home office', 'Dining room'],
      series: [[orderData[0], orderData[1], orderData[2], orderData[3], orderData[4]]]
    };

    const options = {
      seriesBarDistance: 15,
      reverseData: true,
      horizontalBars: true,
      axisX: {
        labelInterpolationFnc: function (value: any, index: number) {
          return index % 1 === 0 ? value : null;
        },
      },
      axisY: {
        offset: 90
      },
      chartPadding: { top: 20, right: 15, bottom: -5, left: 0 }
    };

    new Chartist.Bar('#productRangeBarCart', data, options);
  }



  showOrderPieChart(orderData: number[]) {
    const data = {
      labels: ['new', 'shipped', 'paid'],
      series: [orderData[0], orderData[1], orderData[2]]
    };

    const options = {
      chartPadding: 15,
      labelOffset: 45,
      labelInterpolationFnc: function (value: any, idx: any) {
        return value + " - " + Math.round(data.series[idx] / data.series.reduce((a, b) => a + b) * 100) + '%';
      }
    };
    new Chartist.Pie('#OrderNumberByStatusPieChart', data, options);
  }


  showOrderBarCart(orderData: any) {
    const data = {
      labels: ['new', 'shipped', 'paid'],
      series: [[orderData[0], orderData[1], orderData[2]]]
    };

    const options = {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisX: {
        labelInterpolationFnc: function (value: any, index: number) {
          return index % 2 === 0 ? value : null;
        },
      },
      axisY: {
        offset: 60
      },
      chartPadding: { top: 20, right: 15, bottom: -5, left: 0 }
    };
    new Chartist.Bar('#orderByStatus', data, options);
  }


  _getOrderNumberByStatus(orderByStatus: any): any {

    return [orderByStatus.new.amountSum, orderByStatus.paid.amountSum, orderByStatus.shipped.amountSum]
  }


}
