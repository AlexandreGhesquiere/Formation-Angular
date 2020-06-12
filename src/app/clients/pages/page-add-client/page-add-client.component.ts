import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/shared/models/clients'

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit, OnDestroy {

  public addSub: Subscription;
  public title: string;
  public subtitle: string;

  constructor(private cs: ClientsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = "Clients";
    this.subtitle = "Add a client"
  }

  public addClient(item: Client){
    this.cs.addClient(item).subscribe((result) => {
      this.router.navigate(['../'], {relativeTo: this.route})
    });
  }

  ngOnDestroy(): void {
    if (this.addSub){
      this.addSub.unsubscribe()
    }
  }

}
