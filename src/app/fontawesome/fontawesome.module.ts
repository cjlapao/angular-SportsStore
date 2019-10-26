import { IconDataSource } from './icons/icon.datasource';
import { Icons } from './icons/icons';
import { Icon } from './icons/icon.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  providers: [Icon, Icons, IconDataSource]
})
export class FontawesomeModule {}
