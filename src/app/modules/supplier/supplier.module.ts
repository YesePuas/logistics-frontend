import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierItemComponent } from './supplier-item/supplier-item.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierRoutingModule } from './supplier-routing.module';

@NgModule({
  declarations: [
    SupplierItemComponent,
    SupplierListComponent,
    SupplierCreateComponent,
  ],
  imports: [CommonModule, SupplierRoutingModule],
})
export class SupplierModule {}
