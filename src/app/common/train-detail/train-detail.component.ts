import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Train } from 'src/app/model/train';

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.scss']
})
export class TrainDetailComponent implements OnInit {
  @Input() train: Train = new Train()
  @Input() showTrainDetail: boolean = false

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  closeModal():void {
    this.showTrainDetail = false
    location.reload()
  }

  buyTicketForTrain(train: Train):void {
    const myTrainID = train.id.toString()
    localStorage.setItem('myTrainID', myTrainID)
    this.router.navigateByUrl('tickets')
  }

}
