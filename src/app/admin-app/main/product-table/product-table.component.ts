import { Product } from './../../../model/product.model';
import { ProductRepository } from './../../../model/product.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.less']
})
export class ProductTableComponent implements OnInit {
  constructor(private repository: ProductRepository) {}

  ngOnInit() {}

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number) {
    console.log(`deleting product id ${id}`);
    this.repository.deleteProduct(id);
    this.getProducts();
  }
}
