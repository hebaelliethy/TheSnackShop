import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Isnack } from './snack';
import { SnackDetailsService } from '../snack/snack-details/snack-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //public snackist = [] snack;
  snacklist: Isnack[] = [];

  constructor(
    private homeService: HomeService,
    private snackDetailsService:SnackDetailsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.homeService.getSnacks().subscribe(
      (res) => {
        this.snacklist = res.items;
        //console.log(this.snacklist)
      }
    )

  }
  getSnackDetails(id:number)
  {
    var  snackNew=this.snacklist.find(data=>data.id==id);

    // debugger;
    this.snackDetailsService.updatedDataSelection(snackNew);
    // this.router.navigate(['/snack'],{ queryParams: { id: 'snack.id' } });

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
