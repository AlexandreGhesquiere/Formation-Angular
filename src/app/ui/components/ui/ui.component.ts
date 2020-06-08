import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  public open = true;
  constructor() { }

  ngOnInit(): void {
  }

  public toggle(){
    this.open =!this.open;
  }

}
