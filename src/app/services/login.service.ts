import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  currentUser : string = '';
  currentPass : string = '';

  constructor() { }
}
