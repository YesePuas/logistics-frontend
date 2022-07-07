import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Endpoints } from 'src/app/core/resources/endpoints';
import { environment } from 'src/environments/environment';
import { Vehicle, VehicleDriver } from 'src/app/core/interfaces/vehicle';
import { Driver } from 'src/app/core/interfaces/driver';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient, private endpoints: Endpoints) {}

  public getAllVehicle(): Observable<VehicleDriver[]> {
    let url: string = `${environment.URL_API}${this.endpoints.vehicle}`;
    return this.http.get<VehicleDriver[]>(url);
  }

  public getAllDriver(): Observable<Driver[]> {
    let url: string = `${environment.URL_API}${this.endpoints.driver}`;
    return this.http.get<Driver[]>(url);
  }

  public createVehicle(data: Vehicle) {
    let url: string = `${environment.URL_API}${this.endpoints.vehicle}`;
    return this.http.post(url, data);
  }
}
