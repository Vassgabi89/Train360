import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';

import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { TrainsComponent } from './pages/trains/trains.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { EditTicketComponent } from './pages/edit-ticket/edit-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TrainsComponent,
    TicketsComponent,
    EditTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
