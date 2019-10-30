import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ConnectionService {
  private connEvents: Subject<boolean>;

  constructor() {
    this.connEvents = new Subject<boolean>();
    window.addEventListener('online', e => {
      this.handleConnection(e);
    });
    window.addEventListener('offline', e => {
      this.handleConnection(e);
    });
  }

  private handleConnection(event) {
    this.connEvents.next(this.connected);
  }

  get connected(): boolean {
    return window.navigator.onLine;
  }

  get Changes(): Observable<boolean> {
    return this.connEvents;
  }
}
