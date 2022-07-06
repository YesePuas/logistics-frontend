import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierItemComponent } from './supplier-item/supplier-item.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';



@NgModule({
  declarations: [
    SupplierItemComponent,
    SupplierListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SupplierModule { }
