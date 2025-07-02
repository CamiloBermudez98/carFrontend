import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catApiService } from 'src/app/service/cat-api.service';
@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.sass']
})
export class ResgisterComponent {
registerForm: FormGroup;
isLoading = false;
  constructor(private fb: FormBuilder,public catApiService :catApiService,private router:Router, private snackBar: MatSnackBar) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required]],
      imagen: ['']
    });
  }

  onSubmit() {
    
    if (this.registerForm.valid) {
      this.isLoading = true;
         this.catApiService.postRegistro( this.registerForm.value).subscribe({next: (date) =>{
        if(date.message === "Usuario registrado con éxito"){
           this.snackBar.open('Usuario creado correctamente ✅', 'Cerrar', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.registerForm.reset();
         this.isLoading = false;
        this.router.navigate(['home'])
        }
    },
    error: (err) => {
          this.snackBar.open('Error al registrar usuario ❌', 'Cerrar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
   })
    }
    
  }
}
function next(value: any): void {
  throw new Error('Function not implemented.');
}

