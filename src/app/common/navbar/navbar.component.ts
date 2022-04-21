import { TicketService } from './../../service/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  ticketList$ = this.ticketService.getAll()
  admin: boolean = (localStorage.getItem('admin') === 'true' ? true : false)

  constructor(
    private router: Router,
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.ticketService.getAll().subscribe(
      tickets => {
        tickets.forEach(ticket => {
          ticket.bought = false
          this.ticketService.update(ticket).subscribe(
            data => console.log(data)
          )
        })
      }
    )

    localStorage.setItem('admin', 'false')
    this.router.navigateByUrl('home')
    setTimeout(() => {
      location.reload()
    }, 1000);
  }

}
