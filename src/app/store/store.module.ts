import { RouterModule } from '@angular/router';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { StoreComponent } from './store.component';
import { ModelModule } from './../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    BootstrapModule,
    RouterModule
  ],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule {}
