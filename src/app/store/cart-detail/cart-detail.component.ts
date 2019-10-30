import { ConnectionService } from './../../model/connection.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.less']
})
export class CartDetailComponent implements OnInit {
  public connected: boolean;

  constructor(public cart: Cart, private connection: ConnectionService) {
    this.connected = this.connection.connected;
    connection.Changes.subscribe(state => (this.connected = state));
  }

  ngOnInit() {}
}
