import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Supplier,
  SupplierAmountVeicle,
} from 'src/app/core/interfaces/supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss'],
})
export class SupplierListComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router,
    private service: SupplierService
  ) {}

  public suppliers: SupplierAmountVeicle[] = [];
  public copySupplier: SupplierAmountVeicle[] = [];
  public dataSearch: string = '';

  ngOnInit() {
    this.getAllSupplier();
  }

  public getAllSupplier() {
    this.service.getAllSuppliers().subscribe((res: SupplierAmountVeicle[]) => {
      this.suppliers = res;
      this.copySupplier = [...this.suppliers];
    });
  }

  public searchBySupplier() {
    this.suppliers = this.copySupplier?.filter((res) => {
      return (
        res.full_name
          .toLocaleLowerCase()
          .match(this.dataSearch.toLocaleLowerCase()) ||
        res.document_number
          .toLocaleLowerCase()
          .match(this.dataSearch.toLocaleLowerCase())
      );
    });
  }

  public createSupplier() {
    this.router.navigate(['/supplier/create']);
  }

  public goBack() {
    this.router.navigate(['/home']);
  }
}
