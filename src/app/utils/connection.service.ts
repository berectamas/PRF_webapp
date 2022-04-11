import { HttpClient } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  greet(){
    return this.http.get(environment.serverUrl,{responseType: 'text',withCredentials:true});
  }
  getUsers(){
    return this.http.get(environment.serverUrl+'/user',{responseType: 'text'});
  }

  getExamples(){
    return this.http.get(environment.serverUrl+'/example',{responseType: 'text'});
  }

  setExamples(name:string, descr:string,price: string){
    return this.http.post(environment.serverUrl+'/example',{name: name, description: descr,price:price},{responseType:'text'});
  }

  updateExamples(name:string, descr:string,price: string){
    return this.http.put(environment.serverUrl+'/example',{name: name, description: descr,price:price},{responseType:'text'});
  }

  deleteExample(name:string){
    return this.http.request('delete',environment.serverUrl+'/example',{body:{name:name},responseType:'text'});
  }
}
