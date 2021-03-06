import { Component, OnInit } from '@angular/core';
import { LoginService } from '../utils/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidUser = false;
  constructor(private loginService: LoginService, private router:Router) {
    this.username = '';
    this.password  ='';
   }

   login(){
     if(this.username !='' && this.password !=''){
       this.loginService.login(this.username, this.password).subscribe(msg =>{
         console.log(msg);
         localStorage.setItem('user',this.username);
         this.router.navigate(['/first']);
       },error=>{
        this.invalidUser = true;
         console.log(error);
       })
     }
   }
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      this.loginService.logut().subscribe(msg =>{
        console.log(msg);
      },error=>{
        console.log(error);
      });
    }
  }

}
