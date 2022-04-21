import { TicketService } from './../../service/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {

  //ticketCookie! : any
  //myTickets!: string[]
  ticketList$ = this.ticketService.getAll()
  myTickets!: any

  constructor(
    private ticketService:TicketService
  ) { }

  ngOnInit(): void {
    this.ticketList$.subscribe(
      datas => {
        this.myTickets = datas.filter(data => data.bought === true)
        console.log(this.myTickets)
      }
    )
    /*
    this.ticketCookie = document.cookie.split('; ').find(cookie => cookie.startsWith(`myTickets=`))
    this.myTickets = this.ticketCookie.split('!!!')
    console.log(this.myTickets)*/
  }

}
