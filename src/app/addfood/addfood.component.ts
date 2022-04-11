import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../utils/connection.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
  name: string;
  description: string;
  price:string;
  nsuccess:boolean;
  started:boolean;
  constructor(private connectionService:ConnectionService,private route: ActivatedRoute) { 
    this.name = '';
    this.description  ='';
    this.price = '';
    this.nsuccess = false;
    this.started = false;
  }

  setItems(){
    this.nsuccess = false;
    if(this.name !='' && this.description !='' && this.price !=''){
      this.connectionService.setExamples(this.name, this.description,this.price).subscribe(msg =>{
        this.started = true;
        console.log(msg);
      },error=>{
        this.nsuccess = true;
        console.log(error + ' '+this.nsuccess);
      })
    }
    else{
      this.nsuccess = true;
      this.started = false;
    }
  }

  ngOnInit(): void {
  }

}
