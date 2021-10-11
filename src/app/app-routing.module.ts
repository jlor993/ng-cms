import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
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
  { path: 'users', component: UsersComponent },
  { path: 'users/view/:id', component: UserViewComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/view/:id', component: ArticleViewComponent },
  { path: 'articles/create', component: ArticleCreateComponent },
  { path: 'articles/edit/:id', component: ArticleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
