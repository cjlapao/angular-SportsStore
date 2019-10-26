import { StoreFirstGuard } from './store/storeFirst.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'store',
        component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: 'cart',
        component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: '**', redirectTo: '/store' }
    ])
  ],
  providers: [StoreFirstGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
