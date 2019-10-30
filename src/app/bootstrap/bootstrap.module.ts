import { BsButtonComponent } from './bs-button/bs-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  providers: [BsButtonComponent],
  declarations: [BsButtonComponent],
  exports: [BsButtonComponent]
})
export class BootstrapModule {}
