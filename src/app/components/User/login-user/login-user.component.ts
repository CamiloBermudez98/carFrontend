import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { catApiService } from 'src/app/service/cat-api.service';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.sass']
})
export class LoginUserComponent {
loginForm: FormGroup;
isLoading = false;
  constructor(private fb: FormBuilder,public catApiService :catApiService ,private router:Router,public appComponent: AppComponent,private snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
   
    if (this.loginForm.valid) {
        this.isLoading = true;
      const { username, password } = this.loginForm.value;

       this.catApiService.PostLogin( username, password).subscribe(date=>{

        if(date.message === "Login exitoso"){
         this.isLoading = false;
       
        this.appComponent.isLoggedIn = true
        this.appComponent.user={
          name: date.user.username,
          photoUrl:  date.user.imagen 
        };
       this.router.navigate(['home'])
      }
      else{
        console.log("asdsad")
         this.router.navigate(['home'])
        this.snackBar.open('Usuario incorrecto', 'Cerrar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
      }
    
    }
    )
      
    }
  }
}
