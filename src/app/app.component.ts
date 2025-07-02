import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router:Router){}
  ngOnInit():void{
     this.router.navigate(['home'])
  }
  title = 'cat';

  isLoggedIn:boolean=false

  user = {
    name: 'Camilo Bermudez',
    photoUrl: 'https://i.pravatar.cc/40' // puedes poner el que tengas en Mongo
  };
}
