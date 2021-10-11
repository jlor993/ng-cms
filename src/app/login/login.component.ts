import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  error: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login(): void{

    this.authService.login(this.user).subscribe(
      (response:any)=>{
        console.log(response);

        if(response.success == false){
          this.error=true;
        }

      }
    );
  }

}