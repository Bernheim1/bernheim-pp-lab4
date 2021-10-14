import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.scss']
})
export class DetalleRepartidorComponent implements OnInit {

  repartidorDetalle : any;

  constructor() { }

  ngOnInit(): void {
  }

  eventoRepartidor(evento : any){
    this.repartidorDetalle = evento;
  }

}
