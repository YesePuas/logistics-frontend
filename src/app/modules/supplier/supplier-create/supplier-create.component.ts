import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(public location: Location, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public saveSupplier() {
    if (this.formSupplier.valid) {
      console.log(this.formSupplier.value);
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
