import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ConnectionService } from '../utils/connection.service';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title = 'PRF';
  isAdminUser = false;
  itemCounter = 0;
  basketNames: {[key: string]:string[]} = {};
  basketNamesTemp: string | null;
  constructor(private connectionService:ConnectionService, private router: Router,private route: ActivatedRoute){
    this.basketNamesTemp = null;
    if(!localStorage.getItem('role'))
      console.log(this.isAdmin());
    else
    this.isAdminUser = true;
  }

  isAdmin(){
    var user = localStorage.getItem('user')
    var users = this.connectionService.getUsers();
    var userRole = 'admin';
    let returnValue = false;
    var JSONfile;
    users.subscribe(data => {
      JSONfile = JSON.parse(data)    
      for  (let i =0; i< JSONfile.length; i++){
        //console.log(JSONfile[i].username + ' ' + (user || '').toString() + ' '+JSONfile[i].accessLevel+' '+userRole)
        if(JSONfile[i].username === (user || '').toString() && JSONfile[i].accessLevel === userRole)
          {
            returnValue = true;
            localStorage.setItem('role',userRole);
            //console.log(returnValue)
            break;
          }
          //console.log(returnValue)
      } 
      this.isAdminUser = returnValue
      //console.log(this.isAdminUser)
    }, error =>{
      console.log('Sorry we encountered an error:',error);
    });  
  }


  example = ['1_elem']
  logout(){
    //this.router.navigate(['/second','PRF',{message: this.title}]);
    this.router.navigate(['/login']);
  }
  hello(){
    this.example.push(Math.floor(Math.random()*10)+"_elem")
    this.connectionService.greet().subscribe(data => {
      console.log('This came from the server: ',data);
    }, error =>{
      console.log('Sorry we encountered an error:',error);
    });
  }
  helloFrom(st: string){
    console.log('Hello from ' + st);
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
