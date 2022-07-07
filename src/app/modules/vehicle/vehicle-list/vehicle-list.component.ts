import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {}

  public createVehicle() {
    this.router.navigate(['/vehicle/create']);
  }

  public goBack() {
    this.location.back();
  }
}
