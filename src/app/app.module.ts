import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { IconsModule } from './icons/icons.module';
import { TextModule } from './text/text.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'

registerLocaleData(localeFr, "fr-FR");

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    UiModule,
    IconsModule,
    TextModule,
    CoreModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: ("fr-FR")}],
  bootstrap: [AppComponent]
})
export class AppModule { }
