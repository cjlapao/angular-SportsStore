import { NgForm } from '@angular/forms';
import { Product } from './../../../model/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductRepository } from './../../../model/product.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.less']
})
export class ProductEditorComponent implements OnInit {
  public editing: boolean;
  product: Product = new Product();
  private mode = 'mode';
  private id = 'id';
  categories: string[];

  constructor(
    private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params[this.mode] == 'edit';
    if (this.editing) {
      Object.assign(
        this.product,
        repository.getProduct(activeRoute.snapshot.params[this.id])
      );
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

  getCategories(): string[] {
    this.categories = this.repository.getCategories();
    return this.categories;
  }

  ngOnInit() {}
}
