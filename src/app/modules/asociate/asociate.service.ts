import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operation } from 'src/app/core/interfaces/operation';
import { Endpoints } from 'src/app/core/resources/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AsociateService {
  constructor(private http: HttpClient, private endpoints: Endpoints) {}

  public createAsociate(data: Operation) {
    let url: string = `${environment.URL_API}${this.endpoints.operation}`;
    return this.http.post(url, data);
  }
}
