import { RestDataSource } from './rest.datasource';
// import { StaticDataSource } from './static.datasource';
import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data
        .map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) === index)
        .sort();
    });
  }

  getProducts(category: string = null): Product[] {
    return this.products.filter(
      p => category == null || category === p.category
    );
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource
        .saveProduct(product)
        .subscribe(p => this.products.push(product));
    } else {
      this.dataSource
        .updateProduct(product)
        .subscribe(p =>
          this.products.splice(
            this.products.findIndex(pr => pr.id == product.id),
            1,
            product
          )
        );
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(product => {
      this.products.slice(this.products.findIndex(p => p.id == id), 1);
    });
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
