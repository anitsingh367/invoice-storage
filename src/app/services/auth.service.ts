import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subject = new Subject<boolean>();
  constructor() {}
  isSignedIn() {
    return this.subject.asObservable();
  }
  signIn(value: boolean) {
    this.subject.next(value);
  }
}
