import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UtilidadesService } from 'src/app/services/utilidades.service';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.scss']
})
export class AltaPedidoComponent implements OnInit {

  public grupoDeControles !: FormGroup;

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
  }

  agregarPedido(){
    this.firestore.subirPedido(this.grupoDeControles.value);
    this.grupoDeControles.reset();
    this.utilidades.mostrarToastSuccess('Pedido agregado', 'Se ha agregado correctamente el pedido');
  }


}
