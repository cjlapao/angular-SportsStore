import { Order } from './../../../model/order.model';
import { OrderRepository } from './../../../model/order.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.less']
})
export class OrderTableComponent implements OnInit {
  public includeShipped: boolean;

  constructor(private repository: OrderRepository) {
    this.includeShipped = false;
  }

  ngOnInit() {}

  getOrders(): Order[] {
    return this.repository
      .getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrders(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }
}
