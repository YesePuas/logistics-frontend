import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociateCreateComponent } from './asociate-create/asociate-create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: AsociateCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsociateRoutingModule {}
