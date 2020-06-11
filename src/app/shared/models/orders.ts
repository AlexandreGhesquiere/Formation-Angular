import { StateOrder } from "../enums/state-orders.enum"
import { OrderI } from '../interfaces/orders-i';


export class Order implements OrderI {
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta: string;
  client: string;
  comment: string;
  id: number;
  tjmHT = 500;

  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  totalHT(): number {
    return  this.tjmHT * this.nbJours;
  }

  totalTtc(): number {
    return this.totalHT() * (1 + this.tva / 100)
  }
}
