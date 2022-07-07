import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Driver } from 'src/app/core/interfaces/driver';
import { Supplier } from 'src/app/core/interfaces/supplier';
import { Vehicle } from 'src/app/core/interfaces/vehicle';

@Component({
  selector: 'app-asociate-create',
  templateUrl: './asociate-create.component.html',
  styleUrls: ['./asociate-create.component.scss'],
})
export class AsociateCreateComponent implements OnInit {
  public vehicles: Vehicle[] = [
    {
      license_plate: 'ISH742',
      active: true,
      model: '2019',
      sub_brand: 'HIGHLANDER',
      update_ad: '2022-07-06T12:27:12.144Z',
      created_at: '2022-07-06T12:27:12.144Z',
      id: '2',
      id_brand: '5',
    },
    {
      license_plate: 'ABF672',
      active: true,
      model: '2012',
      sub_brand: 'Camaro',
      update_ad: '2022-07-06T12:30:43.958Z',
      created_at: '2022-07-06T12:17:00.968Z',
      id: '1',
      id_brand: '2',
    },
  ];

  public drivers: Driver[] = [
    {
      document_type: 'CC',
      full_name: 'Martin Iriarte Prada',
      active: true,
      update_ad: '2022-07-06T04:27:18.314Z',
      created_at: '2022-07-06T04:18:55.396Z',
      document_number: '171833832',
      id: '1',
    },
    {
      document_type: 'Passport',
      full_name: 'Camilo Conde Puas',
      active: true,
      update_ad: '2022-07-06T04:42:15.332Z',
      created_at: '2022-07-06T04:42:15.332Z',
      document_number: 'AH527',
      id: '3',
    },
    {
      document_type: 'CC',
      full_name: 'Carlos Herrera Cantillo',
      active: true,
      update_ad: '2022-07-06T06:05:29.959Z',
      created_at: '2022-07-06T04:19:34.234Z',
      document_number: '92472231',
      id: '2',
    },
  ];

  public suppliers: Supplier[] = [
    {
      full_name: 'Company & Asociado',
      document_type: 'Nit',
      document_number: '5273881',
      email: 'company@gmail.com',
      active: true,
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

  public formOperation = new FormGroup({
    id_vehicle: new FormControl('', Validators.required),
    id_supplier: new FormControl('', Validators.required),
    id_driver: new FormControl('', Validators.required),
  });

  constructor(public location: Location, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  /**Vehicle*/

  public displayFnVehicleId(data: any): string {
    console.log(data);
    return data ? data.license_plate : '';
  }

  public returnFnVehicleId(data: any): string | undefined {
    console.log(data);
    return data ? data.id : undefined;
  }

  public onChangeVehicle($event: MatSelectChange) {
    const idVehicle: Vehicle[] = this.vehicles.filter((obj) => {
      return obj.id === $event.value;
    });
    this.formOperation.get('id_vehicle')?.patchValue(idVehicle[0].id!!);
  }

  /**Driver*/
  public displayFnDriverId(data: any): string {
    console.log(data);
    return data ? data.fullName : '';
  }

  public returnFnDriverId(data: any): string | undefined {
    console.log(data);
    return data ? data.id : undefined;
  }

  public onChangeDriver($event: MatSelectChange) {
    const idDriver: Driver[] = this.drivers.filter((obj) => {
      return obj.id === $event.value;
    });
    this.formOperation.get('id_driver')?.patchValue(idDriver[0].id!!);
  }

  /**Supplier*/
  public displayFnSupplierId(data: any): string {
    console.log(data);
    return data ? data.fullName : '';
  }

  public returnFnSupplierId(data: any): string | undefined {
    console.log(data);
    return data ? data.id : undefined;
  }

  public onChangeSupplier($event: MatSelectChange) {
    const idSupplier: Supplier[] = this.suppliers.filter((obj) => {
      return obj.id === $event.value;
    });
    this.formOperation.get('id_supplier')?.patchValue(idSupplier[0].id!!);
  }

  public saveSupplier() {
    if (this.formOperation.valid) {
      console.log(this.formOperation.value);
    } else {
      this._snackBar.open('Faltan campos por llenar', 'x', {
        duration: 3000,
      });
    }
  }

  public goBack() {
    this.location.back();
  }
}
