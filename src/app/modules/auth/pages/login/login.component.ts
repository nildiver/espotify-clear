import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/servicies/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorSession:boolean =false
  formLogin:FormGroup= new FormGroup({});
  constructor(private authService:AuthService ,private cookie:CookieService,
    private router:Router){

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
    //errors 200 al 400
    .subscribe(ResponseOk => {//credenciales del usuario correctas
        console.log('session iniciada correcta',ResponseOk);
        const{tokenSession,data}=ResponseOk
        this.cookie.set('token',tokenSession,4,'/')
        this.router.navigate(['/','tracks'])
    },err =>{//todo  error 400
      this.errorSession=(true)
      console.log('Ocurrio error email o password')
    })
   }
}
