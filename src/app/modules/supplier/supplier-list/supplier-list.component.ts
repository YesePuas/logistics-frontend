import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/core/interfaces/supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss'],
})
export class SupplierListComponent implements OnInit {
  constructor(private location: Location, private router: Router) {}
  public suppliers: Supplier[] = [
    {
      full_name: 'Company & Asociado',
      document_type: 'Nit',
      document_number: '5273881',
      email: 'company@gmail.com',
      active: false,
      update_ad: '2022-07-06T05:22:40.626Z',
      created_at: '2022-07-06T05:00:00.000Z',
      id: '1',
      address: 'Carrera 25 #34 - 33',
    },
    {
      full_name: 'Logist SAS',
      document_type: 'Nit',
      document_number: '732732',
      email: 'Logist@gmail.com',
      active: true,
      update_ad: '2022-07-06T05:23:04.983Z',
      created_at: '2022-07-06T05:00:00.000Z',
      id: '2',
      address: 'Carrera 2 #46 - 33',
    },
    {
      full_name: 'Transpot SAS',
      document_type: 'Nit',
      document_number: '1282624',
      email: 'Transport@gmail.com',
      active: true,
      update_ad: '2022-07-06T05:24:25.332Z',
      created_at: '2022-07-06T05:00:00.000Z',
      id: '4',
      address: 'Calle 5B #34 - 33',
    },
    {
      full_name: 'Giros SAS',
      document_type: 'Nit',
      document_number: '82822192',
      email: 'transpASA@gmail.com',
      active: true,
      update_ad: '2022-07-06T06:01:54.853Z',
      created_at: '2022-07-06T05:00:00.000Z',
      id: '3',
      address: 'Carrera 25 #10D - 33',
    },
    {
      full_name: 'Crack',
      document_type: 'Nit',
      document_number: '678656',
      email: 'crack@gmail.com',
      active: true,
      update_ad: '2022-07-07T04:02:48.164Z',
      created_at: '2022-07-07T03:57:59.393Z',
      id: '5',
      address: 'Calle 28 #67 - 02',
    },
  ];
  public copySupplier: Supplier[] = [...this.suppliers];
  public option?: string = 'todos';
  public dataSearch: string = '';

  ngOnInit() {}

  public searchBySupplier() {
    if (this.dataSearch) {
      this.option = '';
    } else {
      this.option = 'todos';
    }
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
    this.location.back();
  }
}
