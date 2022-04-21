import { TicketService } from './../../service/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  admin: boolean = (localStorage.getItem('admin') === 'true' ? true : false)

  ticketList$ = this.ticketService.getAll()
  myTicket!: Ticket
  showTicketDetail: boolean = false

  sortKey: string = ''
  sortDirection: string = 'A...Z'
  clickCounter: number = 0

  searchKey: string = 'arrival_location'
  keyword: any = ''
  keywordMin: string = ''
  keywordMax: string = ''

  constructor(
    private ticketService: TicketService,
    private trainService: TrainService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("myTrainID")) {
      this.searchKey = 'train'
      const id = localStorage.getItem("myTrainID")
      this.trainService.get(id).subscribe(
        train => this.keyword = train.name
      )
      setTimeout(() => {
        localStorage.removeItem("myTrainID")
      }, 500);
    }
  }

  sorting(key: string, key2?: string): void {
    //if (key2) key=key.concat(' ').concat(key2)
    key === this.sortKey ? this.clickCounter++ : (this.clickCounter = 0);
    this.sortDirection = this.clickCounter % 2 ? 'Z...A' : 'A...Z';
    this.sortKey = key;
  }

  clearKeyword(): void {
    this.keyword = ''
  }

  clearKeywordMinMax(): void {
    this.keywordMin = ''
    this.keywordMax = ''
  }

  onDelete(ticket: Ticket): void {
    if (!confirm('Are you sure')) return
    this.ticketService.delete(ticket.id).subscribe(
      //datas => console.log(datas)
      datas => location.reload()
    )
    //location.reload()
  }

  onSelect(ticket: Ticket): void {
    this.myTicket = ticket
    this.showTicketDetail = true
    this.myTicket.passengers = 1
    this.myTicket.reducedFare = 10
    this.myTicket.fullPrice = Math.round(this.myTicket.price * this.myTicket.passengers * (1 - this.myTicket.reducedFare / 100))
  }

  calcFullPrice(): void {
    console.log(this.myTicket.passengers)
    console.log(this.myTicket.reducedFare)
    console.log(this.myTicket.fullPrice)
    if (this.myTicket.passengers && this.myTicket.reducedFare)
      this.myTicket.fullPrice = Math.round(this.myTicket.price * this.myTicket.passengers * (1 - this.myTicket.reducedFare / 100))
    console.log(this.myTicket.fullPrice)
  }

  onBuy(ticket: Ticket): void {
  }

  saveTicket(ticket: Ticket): void {
    /*
    const ticketCookie = document.cookie.split('; ').find(cookie => cookie.startsWith(`myTickets=`))
    //if (!ticketCookie) document.cookie = `myTickets= ${ticket.departure_location}---${ticket.arrival_location}---${ticket.departure_date}---${ticket.departure_time}---${ticket.travel_time}---${ticket.arrival_date}---${ticket.arrival_time}---${ticket.transfers}---${ticket.class}---${ticket.services}---${ticket.train?.name}---${ticket.price}---${ticket.passengers}---${ticket.reducedFare}---${ticket.fullPrice}!!!; expires=Fri, 30 Dec 2022 20:00:00 UTC;`
    //else {
      const myTickets = ticketCookie?.concat(` ${ticket.departure_location}---${ticket.arrival_location}---${ticket.departure_date}---${ticket.departure_time}---${ticket.travel_time}---${ticket.arrival_date}---${ticket.arrival_time}---${ticket.transfers}---${ticket.class}---${ticket.services}---${ticket.train?.name}---${ticket.price}---${ticket.passengers}---${ticket.reducedFare}---${ticket.fullPrice}!!!;`)
      //document.cookie = `myTickets = ${myTickets}; expires = Fri, 30 Dec 2022 20:00:00 UTC`
      document.cookie = `myTickets = ${myTickets}; expires = Fri, 30 Dec 2022 20:00:00 UTC`
      //console.log(ticket.departure_date)
    //}
    this.router.navigateByUrl('mytickets')*/

    ticket.bought = true
    this.ticketService.update(ticket).subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl('mytickets')
      }
    )

  }

}
