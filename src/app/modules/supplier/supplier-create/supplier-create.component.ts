import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.scss'],
})
export class SupplierCreateComponent implements OnInit {
  public form: FormGroup | any;

  public formSupplier = new FormGroup({
    document_type: new FormControl<string>('', Validators.required),
    document_number: new FormControl<string>('', Validators.required),
    full_name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.email, Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  public save() {
    console.log('llega aqui');
    console.log(this.form.value);
  }
}
