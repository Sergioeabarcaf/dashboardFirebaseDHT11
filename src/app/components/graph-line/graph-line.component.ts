import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'graph-line',
  templateUrl: './graph-line.component.html',
  styleUrls: ['./graph-line.component.css']
})
export class GraphLineComponent implements OnInit {

  chartOption: EChartOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        left: 'left',
        data: ['Temperatura', 'Humedad']
    },
    xAxis: {
      type: 'category',
      name: 'Hora',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Temperatura',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      },
      {
        name: 'Humedad',
        data: [100, 102, 103, 150, 200, 400, 500],
        type: 'line',
        smooth: true
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
