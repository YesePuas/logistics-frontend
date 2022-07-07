import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Driver } from 'src/app/core/interfaces/driver';
import { Operation } from 'src/app/core/interfaces/operation';
import {
  Supplier,
  SupplierAmountVeicle,
} from 'src/app/core/interfaces/supplier';
import { Vehicle, VehicleDriver } from 'src/app/core/interfaces/vehicle';
import { SupplierService } from '../../supplier/supplier.service';
import { VehicleService } from '../../vehicle/vehicle.service';
import { AsociateService } from '../asociate.service';

@Component({
  selector: 'app-asociate-create',
  templateUrl: './asociate-create.component.html',
  styleUrls: ['./asociate-create.component.scss'],
})
export class AsociateCreateComponent implements OnInit {
  public vehicles: Vehicle[] = [];

  public drivers: Driver[] = [];

  public suppliers: Supplier[] = [];

  public formOperation = new FormGroup({
    id_vehicle: new FormControl('', Validators.required),
    id_supplier: new FormControl('', Validators.required),
    id_driver: new FormControl('', Validators.required),
  });

  constructor(
    public location: Location,
    private _snackBar: MatSnackBar,
    private service: AsociateService,
    private router: Router,
    private serviceVehicle: VehicleService,
    private serviceSupplier: SupplierService
  ) {}

  ngOnInit(): void {
    this.getAllVehicle();
    this.getAllDriver();
    this.getAllSupplier();
  }

  public getAllVehicle() {
    this.serviceVehicle.getAllVehicle().subscribe((res: VehicleDriver[]) => {
      this.vehicles = res;
    });
  }

  public getAllDriver() {
    this.serviceVehicle.getAllDriver().subscribe((res: Driver[]) => {
      this.drivers = res;
    });
  }

  public getAllSupplier() {
    this.serviceSupplier
      .getAllSuppliers()
      .subscribe((res: SupplierAmountVeicle[]) => {
        this.suppliers = res;
      });
  }

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
      let objOperation: Operation = {
        id_vehicle: this.formOperation.value.id_vehicle!!,
        id_supplier: this.formOperation.value.id_supplier!!,
        id_driver: this.formOperation.value.id_driver!!,
      };
      this.service.createAsociate(objOperation).subscribe((res) => {
        if (Object.entries(res)[0][1].id) {
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate(['/vehicle/list']));
        } else {
          this._snackBar.open('Ocurrio un error, intente muevamente', 'x', {
            duration: 3000,
          });
        }
      });
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
