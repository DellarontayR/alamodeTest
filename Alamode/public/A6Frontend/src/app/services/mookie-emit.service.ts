import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MookieEmitService {

  constructor() { }
  private emitChangeSource = new Subject<any>();
  private emitLarge = new Subject<any>();
  private emitSession = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();
  largeChangeEmitted$ = this.emitLarge.asObservable();
  sessionEmitted$ = this.emitSession.asObservable();

  emitChange() {
      this.emitChangeSource.next();
  }

  emitLargeChange(){
    this.emitLarge.next();
  }

  emitSessionChange(){
    this.emitSession.next();
  }
}
