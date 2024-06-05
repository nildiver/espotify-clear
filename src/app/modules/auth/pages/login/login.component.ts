import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/servicies/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin:FormGroup= new FormGroup({});
  constructor(private authService:AuthService){

  }
  ngOnInit():void {
       this.formLogin=new FormGroup(
        {
          email:new FormControl('',[
            Validators.required,
            Validators.email
          ]),
          password:new FormControl('',[
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
        }
       )

  }
  sendLogin():void{
    const {email,password}= this.formLogin.value
    this.authService.sendCredentials(email,password)
   }
}
