import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-gestion-delivery',
  templateUrl: './gestion-delivery.component.html',
  styleUrls: ['./gestion-delivery.component.scss']
})
export class GestionDeliveryComponent implements OnInit {

  pedidoDetalle : any;

  constructor(public login : LoginService) { }

  ngOnInit(): void {
  }

  eventoPedido(evento : any){
    console.log(evento);
    this.pedidoDetalle = evento;
  }

}
