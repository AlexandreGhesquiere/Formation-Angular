import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-deleted-client',
  templateUrl: './page-deleted-client.component.html',
  styleUrls: ['./page-deleted-client.component.scss']
})
export class PageDeletedClientComponent implements OnInit {

  public title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = "Client Deleted"
  }

}
