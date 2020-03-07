import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { Observable, from } from 'rxjs';
import { FirebaseData } from '../interfaces/firebase-data';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  data24: FirebaseData[];
  currentData: FirebaseData;

  constructor(public _firebase: AngularFireDatabase) {
    this.getDataLast24Hours();
  }

  getDataLast24Hours() {
    this._firebase.list('data', ref => ref.limitToLast(10)).valueChanges().subscribe( (data: FirebaseData[]) => {
      data.reverse();
      this.data24 = data;
      this.currentData = data[0];
    });
  }

}
