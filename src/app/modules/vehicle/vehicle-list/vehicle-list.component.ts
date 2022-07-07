import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleDriver } from 'src/app/core/interfaces/vehicle';
import { SupplierService } from '../../supplier/supplier.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router,
    private service: VehicleService
  ) {}

  public vehicles: VehicleDriver[] = [];
  public copyVehicle: VehicleDriver[] = [];
  public dataSearch: string = '';

  ngOnInit() {
    this.getAllVehicle();
  }

  public getAllVehicle() {
    this.service.getAllVehicle().subscribe((res: VehicleDriver[]) => {
      this.vehicles = res;
      this.copyVehicle = [...this.vehicles];
    });
  }

  public searchByVehicle() {
    this.vehicles = this.copyVehicle?.filter((res) => {
      return (
        res.license_plate
          .toLocaleLowerCase()
          .match(this.dataSearch.toLocaleLowerCase()) ||
        res.document_number
          ?.toLocaleLowerCase()
          .match(this.dataSearch.toLocaleLowerCase())
      );
    });
  }

  public createVehicle() {
    this.router.navigate(['/vehicle/create']);
  }

  public associateVehicle() {
    this.router.navigate(['/asociate/create']);
  }

  public goBack() {
    this.router.navigate(['/home']);
  }
}
