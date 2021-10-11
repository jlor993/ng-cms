import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id): void {
    this.userService.getUser(id).subscribe(
      (response:any) => {
        this.user = response.user
      }
    );
  }

  deleteUser(id: string): void {
    if(confirm("Are you sure to delete " + this.user.username)) {
      this.userService.deleteUser(id).subscribe(
        ()=>{this.router.navigate(['/users'])}
      );
    }
  }
}