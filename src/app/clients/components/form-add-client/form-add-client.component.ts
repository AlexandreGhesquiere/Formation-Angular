import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/shared/models/clients';
import { StateClient } from 'src/app/shared/enums/state-clients.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-add-client',
  templateUrl: './form-add-client.component.html',
  styleUrls: ['./form-add-client.component.scss']
})
export class FormAddClientComponent implements OnInit {

  @Input() item = new Client();
  @Output() clicked: EventEmitter<Client> = new EventEmitter();
  public states = Object.values(StateClient);
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      state: [this.item.state],
      tva: [this.item.tva],
      id: [this.item.id,
      Validators.compose([Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$  ")])],
      comment: [this.item.comment],
      ca: [this.item.ca],
      name: [this.item.name,
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ]
    });
  }

  public onSubmit() {
    this.clicked.emit(this.form.value)
  }

}
