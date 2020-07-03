import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderStateService } from '../order-state.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router'
import { PizzeriaService } from '../pizzeria.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  orderSubscription = new Subscription();
  pizzas: any[] = [];
  constructor(private orderStateService: OrderStateService,
    private pizzeriaService: PizzeriaService,
    private router: Router
  ) { }
  totalPrice: number = 0;
  ngOnInit() {
    this.orderSubscription = this.orderStateService.addOrder.subscribe(order => {
      if (order) {
        this.pizzas.push(order);
        this.totalPrice = 0;
        this.pizzas.map((item) => { this.totalPrice += item.price; });
      }
    });
  }

  ngOnDestroy() {
    this.orderSubscription.unsubscribe();
  }

  placeOrder() {
    this.pizzeriaService.placeOrder({
      pizzas: this.pizzas,
      isCashOnDelivery: true,
      additionalNote: ''
    }).subscribe((data) => {
      this.router.navigate(['order-success/' + data.id])
    })
  }
}
