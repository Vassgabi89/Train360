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

  admin:boolean = (localStorage.getItem('admin') === 'true' ? true : false)

  ticketList$ = this.ticketService.getAll()

  sortKey: string = ''
  sortDirection: string = 'A...Z'
  clickCounter: number = 0

  searchKey: string = 'arrival_location'
  keyword: string = ''
  keywordMin: string = ''
  keywordMax: string = ''

  constructor(
    private ticketService: TicketService,
    private router: Router
  ) { }

  ngOnInit(): void {
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

}
