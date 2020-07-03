import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input('value') value: number = 1;
  @Output('onChange') onChange = new EventEmitter<number>();
  constructor() { }
  decrease() {
    if (this.value !== 0)
      this.value = this.value - 1;
    this.onChange.next(this.value);
  }
  increase() {
    this.value = this.value + 1;
    this.onChange.next(this.value);
  }
}
