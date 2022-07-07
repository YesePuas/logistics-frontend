import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/core/interfaces/supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.scss'],
})
export class SupplierCreateComponent implements OnInit {
  public documentsType = ['CC', 'Passport', 'Nit'];
  public formSupplier = new FormGroup({
    document_type: new FormControl<string>('', Validators.required),
    document_number: new FormControl<string>('', Validators.required),
    full_name: new FormControl<string>('', Validators.required),
    address: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.email, Validators.required]),
  });

  constructor(
    public location: Location,
    private _snackBar: MatSnackBar,
    private service: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public saveSupplier() {
    if (this.formSupplier.valid) {
      const objSupplier: Supplier = {
        document_type: this.formSupplier.value.document_type!!,
        document_number: this.formSupplier.value.document_number!!,
        full_name: this.formSupplier.value.full_name!!,
        address: this.formSupplier.value.address!!,
        email: this.formSupplier.value.email!!,
      };
      this.service.createSupplier(objSupplier).subscribe((res) => {
        if (Object.entries(res)[0][1].id) {
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate(['/supplier/list']));
        } else {
          this._snackBar.open('Ocurrio un error, intente muevamente', 'x', {
            duration: 3000,
          });
        }
      });
    } else {
      if (
        this.formSupplier.get('email')?.invalid &&
        this.formSupplier.get('email')?.value?.length !== 0
      ) {
        this._snackBar.open('Email invalido', 'x', {
          duration: 3000,
        });
      } else {
        this._snackBar.open('Faltan campos por llenar', 'x', {
          duration: 3000,
        });
      }
    }
  }

  public goBack() {
    this.location.back();
  }
}
