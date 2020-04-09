import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string
  password:string;
  email: string
  constructor() { }

  ngOnInit(): void {
  }

  userLogIn(){

    if (this.username == "Administrator" && this.password == "123456789")
    {
      alert("welcome Admin!")
    }
    else{
      console.log("Invalid credentials")
    }

  }

}
