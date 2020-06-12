import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAddClientComponent } from './components/form-add-client/form-add-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageDeletedClientComponent } from './pages/page-deleted-client/page-deleted-client.component';





@NgModule({
  declarations: [PageListClientsComponent, FormAddClientComponent, PageAddClientComponent, PageDeletedClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
