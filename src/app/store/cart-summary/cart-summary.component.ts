import { Cart } from './../../model/cart.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.less']
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {}
}
