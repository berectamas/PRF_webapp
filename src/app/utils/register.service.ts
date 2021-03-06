import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  register(username:string, email:string,password: string){
    return this.http.post(environment.serverUrl+'/user',{username: username, email: email,password:password},{responseType:'text'});
  }
}
