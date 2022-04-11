import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../utils/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  email:string;
  invalidUser = false;
  constructor(private registerService: RegisterService, private router:Router) {
    this.username = '';
    this.password  ='';
    this.email = '';
   }
   register(){
    if(this.username !='' && this.password !='' && this.email !=''){
      console.log('TESZT');
      this.registerService.register(this.username, this.email,this.password).subscribe(msg =>{
        console.log(msg);
        this.router.navigate(['/login']);
      },error=>{
        this.invalidUser = true;
        console.log(error + ' '+this.invalidUser);
      })
    }
  }

  ngOnInit(): void {
  }

}
