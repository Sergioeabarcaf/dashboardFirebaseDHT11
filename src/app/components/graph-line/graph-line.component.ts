import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { EChartOption } from 'echarts';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'graph-line',
  templateUrl: './graph-line.component.html',
  styleUrls: ['./graph-line.component.css']
})
export class GraphLineComponent implements OnInit {

  chartOption = {
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
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Temperatura',
        data: [],
        type: 'line',
        smooth: true
      },
      {
        name: 'Humedad',
        data: [],
        type: 'line',
        smooth: true
      }
    ]
  }

  constructor(public _firebaseService: FirebaseService, public datePipe: DatePipe) {
    this.chartOption.xAxis.data = this._firebaseService.data.map( (data) => {
      return datePipe.transform(data.time, 'HH:mm', 'UTC');
    });

    this.chartOption.series[0].data = this._firebaseService.data.map( (data) => {
      return data.tem;
    });

    this.chartOption.series[1].data = this._firebaseService.data.map( (data) => {
      return data.hum;
    });
  }

  ngOnInit(): void {
  }

}
