import { StateClient } from '../enums/state-clients.enum';

export interface ClientI {
  state: StateClient;
  tva: number;
  id: number;
  name: string;
  ca: number;
  comment: string;
}
