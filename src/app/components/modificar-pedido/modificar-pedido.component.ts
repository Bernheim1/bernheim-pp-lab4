import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UtilidadesService } from 'src/app/services/utilidades.service';

@Component({
  selector: 'app-modificar-pedido',
  templateUrl: './modificar-pedido.component.html',
  styleUrls: ['./modificar-pedido.component.scss']
})
export class ModificarPedidoComponent implements OnInit {

  public grupoDeControles !: FormGroup;
  @Input() set pedidoDetalle( value : any){
    this.eventoPedido(value);
  };

  constructor(private fb : FormBuilder, private firestore : FirestoreService, private utilidades : UtilidadesService) { 
  }

  ngOnInit(): void {
    this.grupoDeControles = this.fb.group({
      'cliente': ['', Validators.required],
      'mail': ['', [Validators.required, Validators.email]],
      'localidad': ['', Validators.required],
      'direccion': ['', Validators.required],
      'descripcion': ['', [Validators.required, Validators.maxLength(100)]],
      'precio': ['', Validators.required],
      'peso': ['', [Validators.required, Validators.min(500), Validators.max(1000)]],
    });

    console.log(this.pedidoDetalle)


  }

  eventoPedido(opcion : any){
    this.grupoDeControles.get('cliente')?.setValue(opcion.cliente);
    this.grupoDeControles.get('mail')?.setValue(opcion.mail);
    this.grupoDeControles.get('localidad')?.setValue(opcion.localidad);
    this.grupoDeControles.get('direccion')?.setValue(opcion.direccion);
    this.grupoDeControles.get('descripcion')?.setValue(opcion.descripcion);
    this.grupoDeControles.get('precio')?.setValue(opcion.precio);
    this.grupoDeControles.get('peso')?.setValue(opcion.peso);
  }

  agregarPedido(){
    this.firestore.modificarPedido(this.grupoDeControles.value, this.pedidoDetalle.id);
    this.grupoDeControles.reset();
    this.utilidades.mostrarToastSuccess('Pedido modificado', 'Se ha modificado correctamente el pedido');
  }

}
