import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { OrdersModule } from './orders/orders.module';


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "orders",
    loadChildren: () => import("./orders/orders.module").then(m => m.OrdersModule)
  },
  {
    path: "clients",
    loadChildren: () => import("./clients/clients.module").then(m => m.ClientsModule)
  },
  {
    path: "**",
    loadChildren: () => import("./page-not-found/page-not-found.module").then(m => m.PageNotFoundModule)
  }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    const replacer = (key, value) => (typeof value === "function") ? value.name : value;
    console.log("Routes :", JSON.stringify(router.config, replacer, 2))
  }
 }
