import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name=""
  address=""
  phone=""
  email=""
  password=""
  cpassword=""

  readValue=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.phone,"email":this.email,"password":this.password,"cpassword":this.cpassword}
    console.log(data)
  }

}
