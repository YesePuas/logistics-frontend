import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';

@NgModule({
  declarations: [VehicleItemComponent, VehicleListComponent, VehicleCreateComponent],
  imports: [CommonModule, VehicleRoutingModule],
})
export class VehicleModule {}
