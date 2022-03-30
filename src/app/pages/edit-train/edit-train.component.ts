import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-edit-train',
  templateUrl: './edit-train.component.html',
  styleUrls: ['./edit-train.component.scss']
})
export class EditTrainComponent implements OnInit {

  newTrain: boolean = false
  train!: Train

  constructor(
    private activatedRoute: ActivatedRoute,
    private trainService: TrainService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if (param['id'] === '0') {
        this.train = new Train()
        this.newTrain = true
        return
      }
      this.trainService.get(param['id']).forEach(train => {
        this.train = train
      })
    })
  }

  onSubmit(train: Train): void {
    if (!this.newTrain) {
      const data = this.trainService.update(train).subscribe(
        //datas => console.log(datas)
        datas => this.router.navigateByUrl('trains')
      )
    }
    else {
      const data = this.trainService.create(train).subscribe(
        //datas => console.log(datas)
        datas => this.router.navigateByUrl('trains')
        )
      }
      //this.router.navigateByUrl('trains')
  }

}
