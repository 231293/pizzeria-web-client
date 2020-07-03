import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnChanges {
  @Input('menus') menus: [];
  @Input('toppings') toppings: [];
  constructor() { }

  ngOnChanges() {
  }

}
