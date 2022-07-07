import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from 'src/app/core/interfaces/supplier';

@Component({
  selector: 'app-supplier-item',
  templateUrl: './supplier-item.component.html',
  styleUrls: ['./supplier-item.component.scss'],
})
export class SupplierItemComponent implements OnInit {
  @Input() supplierItem?: Supplier;

  constructor() {}

  ngOnInit(): void {}
}
