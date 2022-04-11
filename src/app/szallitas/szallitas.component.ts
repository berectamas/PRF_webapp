import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ConnectionService } from '../utils/connection.service';

@Component({
  selector: 'app-szallitas',
  templateUrl: './szallitas.component.html',
  styleUrls: ['./szallitas.component.css']
})
export class SzallitasComponent implements OnInit {
  itemCounter = 0;
  isAdminUser = false;
  basketNames: {[key: string]:string[]} = {};
  basketNamesTemp: string | null;
  constructor(private connectionService:ConnectionService, private router: Router,private route: ActivatedRoute) {
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
