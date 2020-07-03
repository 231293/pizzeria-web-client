import { Component, Input, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderStateService } from '../order-state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges {
  @Input('menu') menu: any = undefined;
  @Input('toppings') toppings: [] = [];

  extraCheesePrice = 50;
  toppingPrice = 75;
  selectedToppings: any[] = [];
  isExtraCheese: boolean = false;
  price: number = 0;
  selectedSize: any = {};
  selectedCrust: any = {};
  hasAddedToCart: boolean = false;
  qty: number = 1;

  constructor(private modalService: NgbModal, private orderStateService: OrderStateService) { }

  ngOnChanges() {
    if (this.menu) {
      this.selectedSize = this.menu.availableSizes[0];
      this.selectedCrust = this.selectedSize.availableCrusts[0];
      this.menu.availableSizes.map((item: any) => {
        item.availableCrusts.map((crust: any) => {
          crust.name = `${crust.name} (₹${crust.price})`;
        });
      })
      this.price = this.selectedCrust.price;
    }
  }

  openCustomizeModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.hasAddedToCart = true;
      this.addNewOrder();
    }, (reason) => {
    });
  }

  addNewOrder() {
    this.orderStateService.addNewOrder({
      menuId: this.menu.id,
      sizeId: this.selectedSize.id,
      crustId: this.selectedCrust.id,
      extraCheese: this.isExtraCheese,
      toppingIds: this.selectedToppings.map(a => a.id),
      price: this.price,
      name: this.menu.name
    });
  }

  onCounterChange(qty: any) {
    if (this.qty < qty)
      this.addNewOrder()

    this.qty = qty;
    if (qty === 0) {
      this.qty = 1;
      this.hasAddedToCart = false;
    }
  }

  onSizeChange(size: any) {
    this.selectedSize = size;
    this.selectedCrust = this.selectedSize.availableCrusts[0];
  }

  onCrustChange(crust: any) {
    this.selectedCrust = crust;
  }

  onToppingChange(data: any) {
    if (data.isAdd) {
      this.selectedToppings.push(data.topping)
      this.price = this.price + this.toppingPrice;
    }
    else {
      this.price = this.price - this.toppingPrice;
      const filteredToppings = this.selectedToppings.filter((item) => {
        return item.id !== data.topping.id;
      });
      this.selectedToppings = [...filteredToppings];
    }
    console.log('this.selectedToppings', this.selectedToppings);
  }

  onExtraCheeseClicked(event: any) {
    this.isExtraCheese = event.currentTarget.checked;
    if (this.isExtraCheese)
      this.price = this.price + this.extraCheesePrice;
    else
      this.price = this.price - this.extraCheesePrice;
  }
}
