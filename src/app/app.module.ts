import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DetalleRepartidorComponent } from './components/detalle-repartidor/detalle-repartidor.component';
import { TablaDetalleRepartidorComponent } from './components/tabla-detalle-repartidor/tabla-detalle-repartidor.component';
import { DetalleRepartidorSeleccionadoComponent } from './components/detalle-repartidor-seleccionado/detalle-repartidor-seleccionado.component';
import { DetallePaisRepartidorComponent } from './components/detalle-pais-repartidor/detalle-pais-repartidor.component';
import { AltaPedidoComponent } from './components/alta-pedido/alta-pedido.component';
import { ModificarPedidoComponent } from './components/modificar-pedido/modificar-pedido.component';
import { CambiarEstadoPedidoComponent } from './components/cambiar-estado-pedido/cambiar-estado-pedido.component';
import { GestionDeliveryComponent } from './components/gestion-delivery/gestion-delivery.component';
import { TablaPedidosComponent } from './components/tabla-pedidos/tabla-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    AltaRepartidorComponent,
    TablaPaisesComponent,
    DetalleRepartidorComponent,
    TablaDetalleRepartidorComponent,
    DetalleRepartidorSeleccionadoComponent,
    DetallePaisRepartidorComponent,
    AltaPedidoComponent,
    ModificarPedidoComponent,
    CambiarEstadoPedidoComponent,
    GestionDeliveryComponent,
    TablaPedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
