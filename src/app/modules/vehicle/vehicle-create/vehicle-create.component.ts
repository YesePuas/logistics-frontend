import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Brand } from 'src/app/core/interfaces/brand';
import { Driver } from 'src/app/core/interfaces/driver';
import { Vehicle } from 'src/app/core/interfaces/vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.scss'],
})
export class VehicleCreateComponent implements OnInit {
  public brands: Brand[] = [
    {
      denomination: 'Chevrolet',
      update_ad: '2022-07-06T03:30:51.093Z',
      created_at: '2022-07-06T03:30:51.093Z',
      id: '2',
    },
    {
      denomination: 'Audi',
      update_ad: '2022-07-06T03:31:08.446Z',
      created_at: '2022-07-06T03:31:08.446Z',
      id: '3',
    },
    {
      denomination: 'Ford',
      update_ad: '2022-07-06T03:31:34.864Z',
      created_at: '2022-07-06T03:31:34.864Z',
      id: '4',
    },
    {
      denomination: 'Land Rover',
      update_ad: '2022-07-06T03:31:47.512Z',
      created_at: '2022-07-06T03:31:47.512Z',
      id: '5',
    },
    {
      denomination: 'Toyota',
      update_ad: '2022-07-06T03:33:07.426Z',
      created_at: '2022-07-06T03:31:58.763Z',
      id: '6',
    },
    {
      denomination: 'Nissan',
      update_ad: '2022-07-06T03:33:24.526Z',
      created_at: '2022-07-06T03:33:24.526Z',
      id: '7',
    },
    {
      denomination: 'Kia',
      update_ad: '2022-07-06T03:33:47.964Z',
      created_at: '2022-07-06T03:33:47.964Z',
      id: '8',
    },
    {
      denomination: 'Lexus',
      update_ad: '2022-07-06T03:33:53.248Z',
      created_at: '2022-07-06T03:33:53.248Z',
      id: '9',
    },
    {
      denomination: 'BMW',
      update_ad: '2022-07-06T03:34:01.790Z',
      created_at: '2022-07-06T03:34:01.790Z',
      id: '10',
    },
    {
      denomination: 'FIAT',
      update_ad: '2022-07-06T03:34:10.221Z',
      created_at: '2022-07-06T03:34:10.221Z',
      id: '11',
    },
  ];

  public formVehicle = new FormGroup({
    license_plate: new FormControl('', Validators.required),
    id_brand: new FormControl('', Validators.required),
    sub_brand: new FormControl('', Validators.required),
    model: new FormControl<string>('', Validators.required),
  });

  constructor(
    public location: Location,
    private _snackBar: MatSnackBar,
    private service: VehicleService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public saveSupplier() {
    if (this.formVehicle.valid) {
      let objVehicle: Vehicle = {
        license_plate: this.formVehicle.value.license_plate!!,
        id_brand: this.formVehicle.value.id_brand!!,
        sub_brand: this.formVehicle.value.sub_brand!!,
        model: this.formVehicle.value.model!!,
      };
      this.service.createVehicle(objVehicle).subscribe((res) => {
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

  public displayFnBrandId(data: any): string {
    console.log(data);
    return data ? data.denomination : '';
  }

  public returnFnBrandId(data: any): string | undefined {
    console.log(data);
    return data ? data.id : undefined;
  }

  public onChangeBrandId($event: MatSelectChange) {
    const idBrand: Brand[] = this.brands.filter((obj) => {
      return obj.id === $event.value;
    });
    this.formVehicle.get('id_brand')?.patchValue(idBrand[0].id!!);
  }

  public goBack() {
    this.location.back();
  }
}
