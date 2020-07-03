import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  menus: () => '/menus',
  toppings: () => '/toppings',
  placeOrder: () => '/orders'
};

@Injectable({
  providedIn: 'root'
})
export class PizzeriaService {

  constructor(private httpClient: HttpClient) { }

  getMenus(): Observable<[]> {
    return this.httpClient
      .get(routes.menus())
      .pipe(
        map((data: any) => data),
        catchError(() => of('Error, could not load menus'))
      );
  }

  getToppings(): Observable<[]> {
    return this.httpClient
      .get(routes.toppings())
      .pipe(
        map((data: any) => data),
        catchError(() => of('Error, could not load toppings'))
      );
  }

  placeOrder(order:any): Observable<any> {
    return this.httpClient
      .post(routes.placeOrder(), order)
      .pipe(
        map((data: any) => data),
        catchError(() => of('Error, could not place order'))
      );
  }

}