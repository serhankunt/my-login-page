import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userNameOrEmail :string = "";
  password:string = "";

  signIn(form:NgForm){
    if(form.valid){
      console.log(form);
      console.log(form.value);
    }
 
  }

  checkValidation(el:HTMLInputElement){
    if(!el.validity.valid){
      el.classList.add("is-invalid");
      el.classList.remove("is-valid");
    }else{
      el.classList.remove("is-invalid");
      el.classList.add("is-valid");
    }
  }
}
