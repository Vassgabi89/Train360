import { EditTrainComponent } from './pages/edit-train/edit-train.component';
import { EditTicketComponent } from './pages/edit-ticket/edit-ticket.component';
import { TrainsComponent } from './pages/trains/trains.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'trains',
    component: TrainsComponent
  },
  {
    path: 'edit-train/:id',
    component: EditTrainComponent
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
