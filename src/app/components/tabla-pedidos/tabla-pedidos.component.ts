import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tabla-pedidos',
  templateUrl: './tabla-pedidos.component.html',
  styleUrls: ['./tabla-pedidos.component.scss']
})
export class TablaPedidosComponent implements OnInit {

  coleccion : any;
  pedidos : any;
  pedidosBD : any;
  @Output() pedidoDetalle = new EventEmitter<string>();

  constructor(private db : AngularFirestore) { 
    this.coleccion = this.db.collection<any>('pedidos');
    this.pedidos = this.coleccion.valueChanges();
  }

  ngOnInit(): void {
    this.pedidos.subscribe((pedidos : any) => {
      this.pedidosBD = pedidos;
    })
  }

  setOutput(opcion : any){
    this.pedidoDetalle.emit(opcion);
  }

}
