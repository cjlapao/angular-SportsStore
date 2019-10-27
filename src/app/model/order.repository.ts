import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
// import { StaticDataSource } from './static.datasource';
import { Order } from './order.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadOrders() {
    this.loaded = true;
    this.dataSource.getorders().subscribe(orders => (this.orders = orders));
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  updateOrders(order: Order) {
    this.dataSource.updateOrder(order).subscribe(dorder => {
      this.orders.splice(
        this.orders.findIndex(o => o.id === dorder.id),
        1,
        order
      );
    });
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id === o.id));
    });
  }
}
