import { Common } from './../helpers/common';
import { BootstrapSizes } from '../helpers/sizes';
import { BootstrapColors } from '../helpers/colors';
import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'bs-button',
  templateUrl: './bs-button.component.html',
  styleUrls: ['./bs-button.component.less']
})
export class BsButtonComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Input() color: string;
  @Input() outline: boolean;
  @Input() icon: string;
  @Input() spin: boolean;
  @Input() pulse: boolean;
  @Input() block: boolean;
  @Input() size: string;
  @Input() active: boolean;
  @Input() class: string;
  @Input() disabled: boolean;
  @Input() type: string;

  private bootstrapColors: BootstrapColors;
  public css: string;

  constructor() {
    this.bootstrapColors = new BootstrapColors();
  }

  ngOnInit() {
    this.css = this.getButtonClasses();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.color = this.color !== undefined ? this.color : 'primary';
    this.css = this.css !== undefined ? this.css : 'btn';
    this.outline = Common.attributeToBoolean(Object(this.outline));
    this.active = Common.attributeToBoolean(Object(this.active));
    this.spin = Common.attributeToBoolean(Object(this.spin));
    this.pulse = Common.attributeToBoolean(Object(this.pulse));
    this.size = this.size !== undefined ? this.size : 'normal';
    this.block = Common.attributeToBoolean(Object(this.block));
    this.disabled = Common.attributeToBoolean(Object(this.disabled));
    if (changes.active !== undefined) {
      this.active = changes.active.currentValue !== 'false';
    }
  }

  getButtonClasses(): string {
    if (this.class !== undefined) {
      if (this.css.length > 0) {
        this.css += ' ';
      }
      this.css += this.class;
    }
    const colorClass = this.getButtonColorClass();
    const sizeClass = this.getButtonSizeClass();
    if (colorClass !== undefined) {
      if (this.css.length > 0) {
        this.css += ' ';
      }
      this.css += colorClass;
    }
    if (sizeClass !== undefined) {
      if (this.css.length > 0) {
        this.css += ' ';
      }
      this.css += sizeClass;
    }
    console.log(this.css);
    if (this.css !== undefined) {
      return this.css;
    }
    return '';
  }

  getButtonColorClass() {
    const sColor = this.bootstrapColors.getColor(this.color);
    if (sColor !== undefined && !this.css.includes('bg-')) {
      return `btn${this.outline ? '-outline' : ''}-${sColor}`;
    }
  }

  getButtonSizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'btn-sm';
      case 'large':
        return 'btn-lg';
    }
  }

  getButtonIconClass(): string {
    return `fa-${this.icon})`;
  }
}
