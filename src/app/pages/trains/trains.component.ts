import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.scss']
})
export class TrainsComponent implements OnInit {

  admin:boolean = (localStorage.getItem('admin') === 'true' ? true : false)

  trainList$ = this.trainService.getAll()

  constructor(
    private trainService: TrainService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onDelete(train: Train): void {
    if (!confirm('Are you sure')) return
    this.trainService.delete(train.id).subscribe(
      //datas => console.log(datas)
      datas => location.reload()
    )
    //location.reload()
  }

}
