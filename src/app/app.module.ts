import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RentPageComponent } from './rent-page/rent-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {RouterModule} from "@angular/router";
import { AutoPageComponent } from './auto-page/auto-page.component';
import { MotoPageComponent } from './moto-page/moto-page.component';
import { AtvPageComponent } from './atv-page/atv-page.component';
import { CardComponentComponent } from './card-component/card-component.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    RentPageComponent,
    NavBarComponent,
    AutoPageComponent,
    MotoPageComponent,
    AtvPageComponent,
    CardComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomePageComponent},
      {path: 'rent', component: RentPageComponent},
      {path: 'contact', component: ContactPageComponent},
      {path: 'cars', component: AutoPageComponent},
      {path: 'motorcycles', component: MotoPageComponent},
      {path: 'atvs', component: AtvPageComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
