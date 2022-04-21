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
import { EditTrainComponent } from './pages/edit-train/edit-train.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { CutterPipe } from './pipe/cutter.pipe';
import { TrainDetailComponent } from './common/train-detail/train-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { MyTicketsComponent } from './pages/my-tickets/my-tickets.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TrainsComponent,
    TicketsComponent,
    EditTicketComponent,
    EditTrainComponent,
    FilterPipe,
    SorterPipe,
    CutterPipe,
    TrainDetailComponent,
    LoginComponent,
    StatisticsComponent,
    MyTicketsComponent,
    AboutComponent
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
