import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDeliveryComponent } from 'src/app/components/gestion-delivery/gestion-delivery.component';

const routes: Routes = [
  {path: 'gestion', component: GestionDeliveryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
