import { Component, Input, OnInit } from '@angular/core';
import { Train } from 'src/app/model/train';

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.scss']
})
export class TrainDetailComponent implements OnInit {
  @Input() myTrain: Train = new Train()

  constructor() { }

  ngOnInit(): void {
  }

}
