import { StateClient } from "../enums/state-clients.enum"
import { ClientI } from '../interfaces/clients-i';


export class Client implements ClientI {
  state = StateClient.ACTIVE;
  tva: number;
  id: number;
  name: string;
  ca: number;
  comment: string;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
