import { IconDataSource } from './icon.datasource';
import { Icon } from './icon.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Icons {
  private icons: Icon[] = [];

  constructor(private iconDataSource: IconDataSource) {
    iconDataSource.getIcons().subscribe(data => {
      this.icons = data;
    });
  }

  getIcon(name: string): Icon {
    return this.icons.find(f => f.icon === name);
  }

  getIconClass(name: string, type?: string): string {
    type = type !== undefined ? type : 'solid';
    const i = this.icons.find(f => f.icon === name && f.types.includes(type));
    switch (type) {
      case 'solid':
        return `fa-${i.cssClass}`;
    }
  }
}
