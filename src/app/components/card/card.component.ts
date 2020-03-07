import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FirebaseData } from 'src/app/interfaces/firebase-data';

@Component({
  selector: 'component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public _firebaseService: FirebaseService) {
    
  }

  ngOnInit(): void { }

}
