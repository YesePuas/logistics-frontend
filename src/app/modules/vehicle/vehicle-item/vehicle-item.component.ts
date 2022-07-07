import { Component, Input, OnInit } from '@angular/core';
import { VehicleDriver } from 'src/app/core/interfaces/vehicle';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss'],
})
export class VehicleItemComponent implements OnInit {
  @Input() vehicleItem?: VehicleDriver;
  constructor() {}

  ngOnInit(): void {}
}
