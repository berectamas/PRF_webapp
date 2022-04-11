import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SecondComponent } from '../second/second.component';
import { ConnectionService } from '../utils/connection.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  itemCounter = 0;
  basketNamesTemp: string | null;
  names:string[] = [];
  values:number[] = [];
  desc:string[] = [];
  prices:number[] = [];
  price:number = 0;
  basketNames: {[key: string]:string[]} = {};
  constructor(private connectionService:ConnectionService,private route: ActivatedRoute,private router:Router) {
    this.basketNamesTemp = null;
  }
  add(id:number){
    this.values[id]++;
    this.price += this.prices[id];
    this.itemCounter++;
    this.basketNames[this.names[id]][0] = this.values[id].toString();

  }
  sub(id:number){
    if(this.values[id] > 0){
      this.values[id]--;
      this.price -= this.prices[id];
      this.itemCounter--;
      this.basketNames[this.names[id]][0] = this.values[id].toString();
   } 
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
  goToSecond(){
    let queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.basketNames);
    //console.log(names);
    //console.log(values);
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.router.navigate(['/second'],navigationExtras)
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
          this.names.push(x);
          this.values.push(Number(this.basketNames[x][0]))
          this.desc.push(this.basketNames[x][1]);
          this.prices.push(Number(this.basketNames[x][2]));
          this.price += Number(this.basketNames[x][0]) * Number(this.basketNames[x][2]);
          this.itemCounter+=Number(this.basketNames[x][0]);
      }
      console.log(this.basketNames)
    },error =>{
      console.log("Param error");
    })
  }

}
