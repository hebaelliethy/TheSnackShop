import { Injectable } from '@angular/core';
import { Isnack } from '../../home/snack';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class SnackDetailsService {
  private dataSource = new BehaviorSubject<Isnack>(new Isnack);
  data = this.dataSource.asObservable(); 
  constructor() { }
  updatedDataSelection(data: Isnack)
  { this.dataSource.next(data); }
}



