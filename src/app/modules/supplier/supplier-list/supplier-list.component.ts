import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss'],
})
export class SupplierListComponent implements OnInit {
  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {}

  public createSupplier() {
    this.router.navigate(['/supplier/create']);
  }

  public goBack() {
    this.location.back();
  }
}
