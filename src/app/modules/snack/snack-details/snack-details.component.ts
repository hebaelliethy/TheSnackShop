import { Component, OnInit, Input } from '@angular/core';
import { SnackDetailsService } from './snack-details.service';
import { Isnack } from '../../home/snack';

@Component({
  selector: 'app-snack-details',
  templateUrl: './snack-details.component.html',
  styleUrls: ['./snack-details.component.scss']
})
export class SnackDetailsComponent implements OnInit {


snackDetails:Isnack;
count:number=0;
  constructor(private snackDetailsService:SnackDetailsService) { }

  ngOnInit() {
    this.getDetails();

  }
//inject service into component ... 
getDetails(){
this.snackDetailsService.data.subscribe(data =>
   { this.snackDetails=data

  })
  }
 // this.snackDetailsService.updateData(newData);
}
