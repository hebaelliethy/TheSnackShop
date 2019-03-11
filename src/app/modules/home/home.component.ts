import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Isnack } from './snack';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //public snackist = [] snack;
  snacklist: Isnack[]=[];

  constructor(
    private homeService:HomeService
  ) { 
  }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.homeService.getSnacks().subscribe(
      (res)=>
    {
      
this.snacklist=(res);
console.log(this.snacklist)
    }
    )

  }
  // self.expenseSrv.getExpenses(cashRegister,branch)
  // .subscribe(
  //   (res: any) => {
  //   //  debugger;
  //     if (res.data && res.data.length > 0) {
  //       res.data.forEach(value => {
  //         const expens: any = new Expenses(value);
  //         self.reportsList.push(expens);
}
