export enum BootstrapColorTypes {
  Background,
  Button,
  Card,
  Alert
}

export class BootstrapColors {
  public colors: string[] = [
    'primary',
    'secondary',
    'danger',
    'warning',
    'info',
    'dark',
    'light'
  ];

  constructor() {}

  getColors(): string[] {
    return this.colors;
  }

  getColor(name: string): string {
    console.log(`Color Name in Search: ${name}`);
    return this.colors.find(f => f.toLowerCase() === name.toLowerCase());
  }
}
