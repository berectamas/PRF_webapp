import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { __values } from 'tslib';
import { ConnectionService } from '../utils/connection.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  message = '';
  isAdminUser = false;
  itemNames: string[] = [];
  itemDescription: string[] = [];
  itemPrices: string[] = [];
  basketNames: {[key: string]:string[]} = {};
  basketNamesTemp: string | null;
  itemCounter = 0;
  constructor(private connectionService:ConnectionService,private route: ActivatedRoute,private router:Router) { 
         //console.log(environment);
         console.log(this.getExamples())
         this.basketNamesTemp = null;
         this.isAdminUser = this.isAdmin();
  }

  isAdmin(){
    if(localStorage.getItem('role')){
      return true;
    }
    else{
      return false;
    }
  }
  getExamples(){
    var examples = this.connectionService.getExamples();
    var JSONfile;
    examples.subscribe(data=>{
      //console.log(data);
      JSONfile = JSON.parse(data) 
      for  (let i =0; i< JSONfile.length; i++){
        this.itemNames.push(JSONfile[i].name.toString());
        this.itemPrices.push(JSONfile[i].price.toString());
        this.itemDescription.push(JSONfile[i].description.toString());
      } 
    }, error=>{
      console.log('Sorry we encountered an error:',error);
    })
    //console.log(examples); 

  }
  goToModifyPage(name:string){
    this.router.navigate(['/modify',name])
  }
  delete(name:string){
    this.connectionService.deleteExample(name).subscribe(msg =>{
      console.log(msg);
      location.reload();
    },error=>{
      console.log(error);
    })
  }

  addtoBasket(name:string,desc:string,price:string){
    this.itemCounter++;
    if(name in this.basketNames){
      this.basketNames[name][0] = (Number(this.basketNames[name][0]) +1).toString();
      //console.log('true' + name+' '+this.basketNames[name]);
    }
    else{
      //console.log(desc+price)
      this.basketNames[name] = ['1',desc,price]


      //console.log('false' + name+' '+ this.basketNames[name]);
    }
  }
  showBasket(){
    let queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.basketNames);
    //console.log(names);
    //console.log(values);
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.router.navigate(['/basket'],navigationExtras)
  }
  goToFirst(){
    let queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.basketNames);
    //console.log(names);
    //console.log(values);
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.router.navigate(['/first'],navigationExtras)
  }
  goToThird(){
    let queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.basketNames);
    //console.log(names);
    //console.log(values);
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.router.navigate(['/szallitas'],navigationExtras)
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const myArray = this.route.snapshot.queryParamMap.get('myArray');
      this.basketNamesTemp = myArray
      if(this.basketNamesTemp != null){
        var x = JSON.parse(this.basketNamesTemp);
        this.basketNames = x;
        //console.log(this.basketNames)
      }
      for (let x in this.basketNames){
        this.itemCounter+=Number(this.basketNames[x][0]);
    }
      console.log(this.basketNames)
    },error =>{
      console.log("Param error");
    })
  }

}
