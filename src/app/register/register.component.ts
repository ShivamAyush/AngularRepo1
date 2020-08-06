import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { MyapiService } from "../myapi.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName:string;
  userPassword:string;
  userCity:string;
  userEmail:string;
  user:User;
  constructor(private myApi : MyapiService) { }

  ngOnInit(): void {
  }

  validate()
  {
    this.user.userName=this.userName;
    this.user.userPassword=this.userPassword;
    this.user.userCity=this.userCity;
    this.user.userEmail=this.userEmail;
    this.myApi.registerUser(this.user).subscribe(
      user=>{
        this.user.userId=user.userId;
        //console.log(this.user.userId);
      }
    )
  }

}
