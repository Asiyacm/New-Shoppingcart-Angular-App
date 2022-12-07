import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email=""

  password=""

  
  constructor(private route:Router){}
  readValue=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    if (this.email=="user" && this.password=="1234") {
      this.route.navigate(['/usersearch'])
      
    } else {
      alert("Invalid credential")
      
    }
  }

}
