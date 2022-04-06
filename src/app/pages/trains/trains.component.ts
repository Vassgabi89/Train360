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
  myTrain!: Train
  showTrainDetail: boolean = false

  constructor(
    private trainService: TrainService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSelect(train: Train):void {
    this.myTrain = train
    this.showTrainDetail = true
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
