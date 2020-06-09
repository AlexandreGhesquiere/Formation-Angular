import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/clients';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map((datas) => {
        return datas.map((obj) => {
          return new Client (obj);
        })
      })
    );
  }

  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }
}
