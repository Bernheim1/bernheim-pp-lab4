import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tabla-detalle-repartidor',
  templateUrl: './tabla-detalle-repartidor.component.html',
  styleUrls: ['./tabla-detalle-repartidor.component.scss']
})
export class TablaDetalleRepartidorComponent implements OnInit {

  coleccion : any;
  repartidores : any;
  repartidoresBD : any;
  @Output() repartidorDetalle = new EventEmitter<string>();

  constructor(private db : AngularFirestore) { 
    this.coleccion = this.db.collection<any>('repartidores');
    this.repartidores = this.coleccion.valueChanges();
  }

  ngOnInit(): void {
    this.repartidores.subscribe((repartidores : any) => {
      this.repartidoresBD = repartidores;
    })
  }

  setOutput(opcion : any){
    console.log(opcion);
    this.repartidorDetalle.emit(opcion);
  }
}
