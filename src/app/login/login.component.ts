import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userNameOrEmail :string = "";
  password:string = "";

  signIn(form:NgForm){
    if(this.userNameOrEmail ===""){
      alert("Username or email must be valid");
      return;
    }
    if(this.password ===""){
      alert("Password must be valid");
      return;
    }
    console.log(this.userNameOrEmail);
    console.log(this.password);

  }
}
