import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/clients';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/shared/models/orders';
import { StateClient } from 'src/app/shared/enums/state-clients.enum';

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

  //update
  public updateItem(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }

  public changeStateClient(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  // add client

  public addClient(item: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}clients`, item);
  }

  // delete client
  public deleteClient(item: Client): Observable<Client> {
    return this.http.delete<Client>(`${this.urlApi}clients/${item.id}`);
  }

  //update
  // public updateClient(item: Client): Observable<Client> {
  //   const obj = new Client({...item});
  //   obj.item = this.client;
  //   return this.updateItem(obj);
  // }
}
