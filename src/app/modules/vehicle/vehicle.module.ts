import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';

@NgModule({
  declarations: [VehicleItemComponent, VehicleListComponent],
  imports: [CommonModule, VehicleRoutingModule],
})
export class VehicleModule {}
