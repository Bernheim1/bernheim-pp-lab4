import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from 'src/app/components/alta-repartidor/alta-repartidor.component';
import { DetalleRepartidorComponent } from 'src/app/components/detalle-repartidor/detalle-repartidor.component';


const routes: Routes = [
  {path: 'alta', component: AltaRepartidorComponent},
  {path: 'detalle', component: DetalleRepartidorComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
