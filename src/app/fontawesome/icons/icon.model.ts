import { Injectable } from '@angular/core';

@Injectable()
export class Icon {
  constructor(
    public icon?: string,
    public cssClass?: string,
    public types?: string[]
  ) {
    if (this.types === undefined) {
      this.types = [];
    }
    if (this.types.length === 0) {
      this.types.push('solid');
    }
  }

  public addType(name: string) {
    const inType = this.types.find(f => f.toLowerCase() === name.toLowerCase());
    if (inType === undefined) {
      this.types.push(name);
    }
  }
}
