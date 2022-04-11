import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../utils/connection.service';

@Component({
  selector: 'app-modifyfood',
  templateUrl: './modifyfood.component.html',
  styleUrls: ['./modifyfood.component.css']
})
export class ModifyfoodComponent implements OnInit {

  name = '';
  description: string;
  price:string;
  isValid:boolean;
  constructor(private connectionService:ConnectionService,private route: ActivatedRoute,private router:Router) { 
    this.name = '';
    this.description  ='';
    this.price = '';
    this.isValid = true;
  }

  updateItem(){
    if(this.description !='' && this.price !=''){
      console.log(this.name + ' ' + this.description+' '+ this.price)
      this.connectionService.updateExamples(this.name, this.description,this.price).subscribe(msg =>{
        console.log(this.description);
        this.router.navigate(['/second']);
      },error=>{
        console.log(error);
        this.isValid = false;
      })
    }
    else{
      this.isValid = false;
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      if(params.get('name'))
        this.name = String(params.get('name'));
    },error =>{
      console.log("Param error");
    })
  }

}
