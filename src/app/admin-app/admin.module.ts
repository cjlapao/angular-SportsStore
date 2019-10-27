import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './main/product-table/product-table.component';
import { ProductEditorComponent } from './main/product-editor/product-editor.component';
import { OrderTableComponent } from './main/order-table/order-table.component';

const routing = RouterModule.forChild([
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'main',
    component: AdminComponent,
    children: [
      {
        path: 'products/:mode/:id',
        component: ProductEditorComponent
      },
      { path: 'products/:mode', component: ProductEditorComponent },
      { path: 'products', component: ProductTableComponent },
      { path: 'orders', component: OrderTableComponent },
      { path: '**', redirectTo: 'products' }
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'auth' }
]);

@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductTableComponent,
    ProductEditorComponent,
    OrderTableComponent
  ],
  providers: [AuthGuard],
  imports: [CommonModule, FormsModule, routing]
})
export class AdminModule {}
