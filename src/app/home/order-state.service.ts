import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderStateService {
  private addOrderSubject = new BehaviorSubject<any>(undefined);
  addOrder = this.addOrderSubject.asObservable();

  addNewOrder(order: any) {
    this.addOrderSubject.next(order);
  }
}