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

  subirPedido(object : any){
    return this.firestore.collection('pedidos').add(object)
    .then((respuesta) => {
      console.log(respuesta);
    }).catch((err) => {
      console.error(err);
    });
  }

  modificarPedido(object : any, id : any){
    return this.firestore.collection('pedidos').doc(id).update(object);
  }
}
