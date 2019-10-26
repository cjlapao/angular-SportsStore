import { Observable, from } from 'rxjs';
import { Icon } from './icon.model';
import { Injectable } from '@angular/core';

@Injectable()
export class IconDataSource {
  private icons: Icon[] = [
    new Icon('shopping-cart', 'shopping-cart', ['solid']),
    new Icon('anchor', 'anchor', ['solid']),
    new Icon('abacus', 'abacus'),
    new Icon('arrow-left', 'arrow-left')
  ];

  constructor() {}

  getIcons(): Observable<Icon[]> {
    return from([this.icons]);
  }
}
