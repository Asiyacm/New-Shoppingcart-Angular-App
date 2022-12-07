import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';


const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  
  {
    path:"register",
    component:UserRegisterComponent
  },
  {
    path:"add",
    component:AddProductComponent
  },
  {
    path:"view",
    component:ViewProductComponent
  },
  {
    path:"search",
    component:SearchProductComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AddProductComponent,
    ViewProductComponent,
    SearchProductComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
