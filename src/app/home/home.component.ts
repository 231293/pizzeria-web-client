import { Component } from '@angular/core';
import { PizzeriaService } from './pizzeria.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading = false;
  menus: [] | undefined = [];
  toppings: [] | undefined = [];
  constructor(private pizzeriaService: PizzeriaService) { }

  ngOnInit() {
    this.isLoading = true;
    this.pizzeriaService.getMenus()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data) => {
        this.menus = data;
      });
    this.isLoading = true;
    this.pizzeriaService.getToppings()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data) => {
        this.toppings = data;
      });
  }
}
