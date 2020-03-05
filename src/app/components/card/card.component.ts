import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() paramName = 'Parametro';
  valueCurrent = 36;
  unitMeasurement = '°C';
  time = "23 marzo 2020 - 09:50";

  constructor() { }

  ngOnInit(): void {
  }

}
