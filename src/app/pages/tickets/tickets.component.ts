import { TicketService } from './../../service/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';
import { tick } from '@angular/core/testing';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  ticketList$ = this.ticketService.getAll()

  constructor(
    private ticketService: TicketService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onDelete(ticket: Ticket): void {
    if (!confirm('Are you sure')) return
    this.ticketService.delete(ticket.id).subscribe(
      //datas => console.log(datas)
      datas => location.reload()
    )
    //location.reload()
  }

}
