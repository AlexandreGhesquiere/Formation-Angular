import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { NbJoursCheckDirective } from './directives/nb-jours-check.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { RouterModule } from '@angular/router';
import { CaCheckDirective } from './directives/ca-check.directive';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective, NbJoursCheckDirective, TableDarkComponent, CaCheckDirective],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BtnComponent, TableLightComponent, TotalPipe, StateDirective, NbJoursCheckDirective, TableDarkComponent, CaCheckDirective]
})

export class SharedModule { }
