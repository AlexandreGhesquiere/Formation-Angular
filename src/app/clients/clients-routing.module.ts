import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageDeletedClientComponent } from './pages/page-deleted-client/page-deleted-client.component';




const routes: Routes = [
  { path: "", component: PageListClientsComponent},
  { path: "add", component: PageAddClientComponent},
  { path: "deleted", component: PageDeletedClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
