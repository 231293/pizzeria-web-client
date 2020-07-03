import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent {
  orderNumber: number = 0;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(obj => {
      this.orderNumber = obj.id;
    });
   }
}
