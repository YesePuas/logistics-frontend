import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./modules/vehicle/vehicle.module').then((i) => i.VehicleModule),
  },
  {
    path: 'supplier',
    loadChildren: () =>
      import('./modules/supplier/supplier.module').then(
        (i) => i.SupplierModule
      ),
  },
  {
    path: 'asociate',
    loadChildren: () =>
      import('./modules/asociate/asociate.module').then(
        (i) => i.AsociateModule
      ),
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
