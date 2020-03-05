import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FirebaseData } from 'src/app/interfaces/firebase-data';

@Component({
  selector: 'component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() paramName: String;
  valueCurrent = 0;
  unitMeasurement = 'UM';
  time: any;

  constructor(public _firebaseService: FirebaseService) {
    
  }

  ngOnInit(): void {
    this.setVariables(this.paramName);
    console.log(this.paramName);
    if (this.paramName == "Temperatura") {
      this._firebaseService.getCurrentData().subscribe((data:FirebaseData[]) => {
        console.log(data);
        this.valueCurrent = data[0].tem;
        this.time = data[0].epochTime;
      });
    }

    if (this.paramName == "Humedad") {
      this._firebaseService.getCurrentData().subscribe((data:FirebaseData[]) => {
        console.log(data);
        this.valueCurrent = data[0].hum;
        this.time = data[0].epochTime;
      });
    }
  }

  setVariables(name:String) {
    switch (name) {
      case "Temperatura":
        this.unitMeasurement = "°C";
        break;
      case "Humedad":
        this.unitMeasurement = "%HR";
        break;
      default:
        this.unitMeasurement = "UM";
        break;
    }
    
  } 

}
