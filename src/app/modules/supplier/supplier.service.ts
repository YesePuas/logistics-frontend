import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  Supplier,
  SupplierAmountVeicle,
} from 'src/app/core/interfaces/supplier';
import { Endpoints } from 'src/app/core/resources/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  constructor(private http: HttpClient, private endpoints: Endpoints) {}

  public getAllSuppliers(): Observable<SupplierAmountVeicle[]> {
    let url: string = `${environment.URL_API}${this.endpoints.supplier}`;
    return this.http.get<SupplierAmountVeicle[]>(url);
  }

  public createSupplier(data: Supplier) {
    let url: string = `${environment.URL_API}${this.endpoints.supplier}`;
    return this.http.post(url, data);
  }
}
