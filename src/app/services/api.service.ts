import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGithub(){
    return this.http.get('https://api.github.com/users/Bernheim1');
  }

  getFlags(){
    return this.http.get('https://restcountries.com/v2/alpha?codes=sn,ke,gr,it,rs');
  }
}
