import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { MenuListComponent } from './menuList/menu-list.component';
import { CounterComponent } from './counter/counter.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToppingComponent } from './topping/topping.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    CartComponent,
    CartItemsComponent,
    CounterComponent,
    HomeComponent,
    MenuComponent,
    MenuListComponent,
    ToppingComponent,
    OrderSuccessComponent
  ]
})
export class HomeModule { }
