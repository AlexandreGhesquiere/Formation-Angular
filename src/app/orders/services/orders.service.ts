import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/models/orders';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((datas) => {
        return datas.map((obj) => {
          return new Order (obj);
        })
      })
    );
  }

  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }
}
