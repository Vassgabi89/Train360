import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  adminLoginData:any = {name:'', passw:''}

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (!localStorage.getItem('admin') || localStorage.getItem('admin') === 'false') localStorage.setItem('admin', 'true')
    this.router.navigateByUrl('home')
    setTimeout(() => {
      location.reload()
    }, 1000);
  }

}
