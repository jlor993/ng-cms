import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent }   from './users/users.component';
import { UserViewComponent }   from './users/user-view/user-view.component';
import { UserCreateComponent }   from './users/user-create/user-create.component';
import { UserEditComponent }   from './users/user-edit/user-edit.component';
import { ArticlesComponent }   from './articles/articles.component';
import { ArticleViewComponent }   from './articles/article-view/article-view.component';
import { ArticleCreateComponent }   from './articles/article-create/article-create.component';
import { ArticleEditComponent }   from './articles/article-edit/article-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'users', component: UsersComponent, canActivate:[AuthGuardService] },
  { path: 'users/view/:id', component: UserViewComponent, canActivate:[AuthGuardService] },
  { path: 'users/create', component: UserCreateComponent, canActivate:[AuthGuardService] },
  { path: 'users/edit/:id', component: UserEditComponent, canActivate:[AuthGuardService] },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/view/:id', component: ArticleViewComponent },
  { path: 'articles/create', component: ArticleCreateComponent, canActivate:[AuthGuardService] },
  { path: 'articles/edit/:id', component: ArticleEditComponent, canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService],
})
export class AppRoutingModule { }
