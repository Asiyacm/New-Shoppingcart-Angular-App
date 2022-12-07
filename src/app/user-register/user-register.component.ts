import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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
  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.phone,"email":this.email,"password":this.password,"cpassword":this.cpassword}
    console.log(data)
    this.api.addRegistration(data).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
  }

}
