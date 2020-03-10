import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { Observable, from } from 'rxjs';
import { FirebaseData } from '../interfaces/firebase-data';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  data: FirebaseData[];
  currentData: FirebaseData;

  constructor(public _firebase: AngularFireDatabase) {
    this.getDataLast24Hours();
  }

  getDataLast24Hours() {
    this._firebase.list('data', ref => ref.limitToLast(288)).valueChanges().subscribe( (data: FirebaseData[]) => { 
      data.reverse();
      this.data = data;
      this.currentData = data[0];
    });
  }

  getDataLineChart() {
    return this._firebase.list('data', ref => ref.limitToLast(288)).valueChanges();
  }

}
