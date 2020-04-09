import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname: string;
  lastname: string;
  username: string;
  email:string;
  password:string;
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

signUp(){
  if (this.firstname == "Admin" && this.lastname == "Admin"  && this.username == "Administrator" && this.email == "admin@gmail.com" && this.password == "123456789"){
   alert("succesful sign up")
  }
  else{
    alert("fill in all fields")
  }
}

}
