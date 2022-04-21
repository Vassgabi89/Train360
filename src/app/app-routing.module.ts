import { AboutComponent } from './pages/about/about.component';
import { MyTicketsComponent } from './pages/my-tickets/my-tickets.component';
import { EditTrainComponent } from './pages/edit-train/edit-train.component';
import { EditTicketComponent } from './pages/edit-ticket/edit-ticket.component';
import { TrainsComponent } from './pages/trains/trains.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'edit-ticket/:id',
    component: EditTicketComponent
  },
  {
    path: 'mytickets',
    component: MyTicketsComponent
  },
  {
    path: 'trains',
    component: TrainsComponent
  },
  {
    path: 'edit-train/:id',
    component: EditTrainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: HomeComponent
    //redirectTo: '' //ide jöhetne akár egy 404-es oldal is
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
