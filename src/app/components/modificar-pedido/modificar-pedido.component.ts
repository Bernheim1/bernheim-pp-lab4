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
  @Input() pedidoDetalle : any;

  constructor(private fb : FormBuilder, private firestore : FirestoreService, private utilidades : UtilidadesService) { }

  ngOnInit(): void {
    this.grupoDeControles = this.fb.group({
      'cliente': ['', Validators.required],
      'mail': ['', [Validators.required, Validators.email]],
      'localidad': ['', Validators.required],
      'direccion': ['', Validators.required],
      'descripcion': ['', [Validators.required, Validators.maxLength(100)]],
      'precio': ['', Validators.required],
      'peso': ['', [Validators.required, Validators.min(500), Validators.max(1000)]],
      'estadoPedido': ['listo sin entregar']
    });

    console.log(this.pedidoDetalle)

    this.grupoDeControles.get('cliente')?.setValue(this.pedidoDetalle.cliente);
    this.grupoDeControles.get('mail')?.setValue(this.pedidoDetalle.mail);
    this.grupoDeControles.get('localidad')?.setValue(this.pedidoDetalle.localidad);
    this.grupoDeControles.get('direccion')?.setValue(this.pedidoDetalle.direccion);
    this.grupoDeControles.get('descripcion')?.setValue(this.pedidoDetalle.descripcion);
    this.grupoDeControles.get('precio')?.setValue(this.pedidoDetalle.precio);
    this.grupoDeControles.get('peso')?.setValue(this.pedidoDetalle.peso);
  }

  agregarPedido(){
    this.firestore.subirPedido(this.grupoDeControles.value);
    this.grupoDeControles.reset();
    this.utilidades.mostrarToastSuccess('Pedido agregado', 'Se ha pedido correctamente el repartidor');
  }

}
