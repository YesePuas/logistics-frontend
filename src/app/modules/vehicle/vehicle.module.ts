import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    VehicleItemComponent,
    VehicleListComponent,
    VehicleCreateComponent,
  ],
  imports: [CommonModule, VehicleRoutingModule, CoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VehicleModule {}
