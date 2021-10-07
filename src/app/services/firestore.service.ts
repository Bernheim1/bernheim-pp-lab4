import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore : AngularFirestore) { }

  subirRepartidor(object : any){
    return this.firestore.collection('repartidores').add(object)
    .then((respuesta) => {
      console.log(respuesta);
    }).catch((err) => {
      console.error(err);
    });
  }
}
