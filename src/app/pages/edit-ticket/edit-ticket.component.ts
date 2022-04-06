import { TicketService } from './../../service/ticket.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {

  newTicket: boolean = false
  ticket!: Ticket
  trainList$ = this.trainService.getAll()


  constructor(
    private activatedRoute: ActivatedRoute,
    private ticketService: TicketService,
    private trainService: TrainService,
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
    /*
    //DATE FORMAT FOR SORTING
    const myTicket = ticket
    console.log(myTicket)
    const departureDateElements = ticket.departure_date.split('/')
    departureDateElements.map(dateElement => {
      if (dateElement.length == 1) dateElement = '0'.concat(dateElement)
      console.log(dateElement)
    })
    console.log(myTicket)
    const rightDate=departureDateElements[0].concat('/').concat(departureDateElements[1]).concat('/').concat(departureDateElements[2])
    console.log(rightDate)
    myTicket.departure_date = rightDate
    console.log(myTicket)
    */

    if (!this.newTicket) {
      const data = this.ticketService.update(ticket).subscribe(
        //datas => console.log(datas)
        datas => this.router.navigateByUrl('tickets')
        )
      }
      else {
        const data = this.ticketService.create(ticket).subscribe(
          //datas => console.log(datas)
          datas => this.router.navigateByUrl('tickets')
      )
    }
    //this.router.navigateByUrl('tickets')
  }

}
