import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.scss']
})
export class ToppingComponent implements OnChanges {
  @Input('topping') topping: any;
  isAdd: boolean = true;
  //topping: any = undefined;
  @Output('onClick') onClick = new EventEmitter<{ isAdd: boolean, topping: any }>();
  constructor() { }

  ngOnChanges() {
    // if (this.value)
    //   this.topping = this.value;
  }

  addOrRemoveToppings() {
    this.onClick.next({ isAdd: this.isAdd, topping: this.topping });
    this.isAdd = !this.isAdd;
  }
}
