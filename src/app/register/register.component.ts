import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  user: User = new User();
  error: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
 
  register(): void{
    this.authService.register(this.user).subscribe(
      (response:any)=>{
        console.log(response);

        if(response.success == false){
          this.error=true;
        }

      }
    );
  }

}