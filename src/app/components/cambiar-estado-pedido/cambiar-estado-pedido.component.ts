import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UtilidadesService } from 'src/app/services/utilidades.service';

@Component({
  selector: 'app-cambiar-estado-pedido',
  templateUrl: './cambiar-estado-pedido.component.html',
  styleUrls: ['./cambiar-estado-pedido.component.scss']
})
export class CambiarEstadoPedidoComponent implements OnInit {

  @Input() pedidoDetalle : any;

  constructor(private firestore : FirestoreService, private utilidades : UtilidadesService) { }

  ngOnInit(): void {
  }

  cambiarEstado(opcion : number) : void {
    switch (opcion) {
      case 0:
        this.pedidoDetalle.estadoPedido = 'listo sin entregar';
        this.agregarPedido();
        break;
      case 1: 
      this.pedidoDetalle.estadoPedido = 'entregado';
      this.agregarPedido();
        break;
      case 2:
        this.pedidoDetalle.estadoPedido = 'rechazado';
        this.agregarPedido();
        break;
    }
  }

  agregarPedido(){
    this.firestore.modificarPedido(this.pedidoDetalle, this.pedidoDetalle.id);
    this.utilidades.mostrarToastSuccess('Estado modificado', 'Se ha modificado correctamente el estado');
  }
}
