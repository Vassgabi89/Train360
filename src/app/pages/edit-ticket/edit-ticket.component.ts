import { TicketService } from './../../service/ticket.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {

  newTicket: boolean = false
  ticket!: Ticket

  constructor(
    private activatedRoute: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if (param['id'] === '0') {
        this.ticket = new Ticket()
        this.newTicket = true
        return
      }
      this.ticketService.get(param['id']).forEach(ticket => {
        this.ticket = ticket
      })
    })
  }

  onSubmit(ticket: Ticket): void {
    if (!this.newTicket) {
      const data = this.ticketService.update(ticket).subscribe(
        //datas => console.log(datas)
      )
    }
    else {
      const data = this.ticketService.create(ticket).subscribe(
        //datas => console.log(datas)
      )
    }
    this.router.navigateByUrl('tickets')
  }

}
