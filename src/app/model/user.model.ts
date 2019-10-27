import { IUser } from './user.interface';
import { v4 as uuid } from 'uuid';

export class User implements IUser {
  public readonly id: string;
  public name: string;

  constructor() {
    this.id = uuid();
  }
}
