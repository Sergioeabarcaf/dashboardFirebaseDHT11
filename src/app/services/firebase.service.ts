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

  constructor(public _firebase: AngularFireDatabase) {
    this.getDataLast24Hours();
  }

  getDataLast24Hours() {
    this._firebase.list('data', ref => ref.limitToLast(10)).valueChanges().subscribe( (data:FirebaseData[]) => {
      console.log(data);
      this.data24 = data;
    });
  }

  getCurrentData() {
    return this._firebase.list('data', ref => ref.limitToLast(1)).valueChanges();
  }

}
