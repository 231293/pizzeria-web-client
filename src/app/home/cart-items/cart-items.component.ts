import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent {
  @Input('item') item: any = undefined;
  constructor() { }
}
