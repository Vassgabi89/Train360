import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  admin:boolean = (localStorage.getItem('admin') === 'true' ? true : false)

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.admin)
  }

  logout(): void {
    localStorage.setItem('admin', 'false')
    this.router.navigateByUrl('home')
    setTimeout(() => {
      location.reload()
    }, 1000);
  }

}
