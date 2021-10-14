import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-repartidor-seleccionado',
  templateUrl: './detalle-repartidor-seleccionado.component.html',
  styleUrls: ['./detalle-repartidor-seleccionado.component.scss']
})
export class DetalleRepartidorSeleccionadoComponent implements OnInit {

  @Input() repartidorDetalle : any;

  constructor() { }

  ngOnInit(): void {
  }

}
