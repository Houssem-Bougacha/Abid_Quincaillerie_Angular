import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authser:AuthService,private route:Router){}


sign():void{
  this.authser.doGoogleLogin().then(()=>{
this.route.navigate(['/'])

  })

}
}
