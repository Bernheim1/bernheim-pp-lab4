import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'repartidor', loadChildren: () => import('./modules/repartidor/repartidor.module').then(m => m.RepartidorModule), canActivate: [AuthGuard]},
  {path: 'delivery', loadChildren: () => import('./modules/delivery/delivery.module').then(m => m.DeliveryModule), canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
