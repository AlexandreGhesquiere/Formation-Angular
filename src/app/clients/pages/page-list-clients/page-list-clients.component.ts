import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/clients'
import { Btn } from 'src/app/shared/interfaces/btn-i';
import { StateClient } from 'src/app/shared/enums/state-clients.enum';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection: Client[];
  public headers: string [];
  public states = Object.values(StateClient);
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public newClient: Client;
  constructor(private os: ClientsService) { }

  ngOnInit(): void {

    this.newClient = {
      name: "Michelle",
      comment: "Commentaire pour le nouveau client en brut",
      id: 123,
      tva: 20,
      ca: 1220000,
      state: StateClient.ACTIVE
    }

    this.btnRoute = {
      label: "Add a client",
      action: true
    };

    this.btnHref = {
      label: "Go to Yahoo^^",
      href:"http://www.google.fr/"
    };

    this.btnAction = {
      label: "Click on me",
      action: true
    };

    this.os.collection.subscribe((datas) => {
      this.collection = datas;
    });
    this.headers = [
      "State",
      "Tva",
      "Id",
      "Name",
      "Ca",
      "Comment"
    ]
  }

  public openPopup() {
    alert("Open popup");
  }

  public changeStateClient(item: Client, event){
    this.os.changeStateClient(item, event.target.value).subscribe((result) => {
      item.state = result.state;
    } )
  }

  public addNewClient(){
    this.os.addClient(this.newClient).subscribe((result) => {
      this.collection.push(result);
    })
  }
}
