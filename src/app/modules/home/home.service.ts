import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Isnack, IsnackRoot } from './snack';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  getSnacks():Observable<IsnackRoot>{
    const base='https://api.myjson.com/bins/z9s2i';
    return this.http.get<IsnackRoot>(base);

  }
}
