import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/clients'
import { Btn } from 'src/app/shared/interfaces/btn-i';
import { StateClient } from 'src/app/shared/enums/state-clients.enum';
import { Router, ActivatedRoute } from '@angular/router';

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
  public btnDelete: Btn;
  public btnUpdate: Btn;

  constructor(private cs: ClientsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.btnRoute = {
      label: "Add a client",
      route: "add"
    };

    this.btnHref = {
      label: "Go to Yahoo^^",
      href:"http://www.google.fr/"
    };

    this.btnAction = {
      label: "Click on me",
      action: true
    };

    this.btnDelete = {
      label: "Delete",
      action: true
    }

    this.btnUpdate = {
      label: "Update",
      action: true
    }

    this.cs.collection.subscribe((datas) => {
      this.collection = datas;
    });
    this.headers = [
      "State",
      "Tva",
      "Id",
      "Name",
      "Ca",
      "Comment",
      "Action"
    ]
  }

  public openPopup() {
    alert("Open popup");
  }

  public changeStateClient(item: Client, event){
    this.cs.changeStateClient(item, event.target.value).subscribe((result) => {
      item.state = result.state;
    });
  }

  public deleteClient(item: Client) {
    this.cs.deleteClient(item).subscribe((result) => {
      this.router.navigate(['deleted'], {relativeTo: this.route})
    });
  }

}
