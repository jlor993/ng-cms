import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user = new User();
  // errors: Array<any> = [];
  errors: any = [];
  errorMessage: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void{}

  response(response): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true){
      this.router.navigate(['/users/view/', response.user._id]);
    }
  }

  onSubmit(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => {
        this.response(response)
      }
    );
  }
}