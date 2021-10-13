import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './users/user-view/user-view.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';
import { ArticleViewComponent } from './articles/article-view/article-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserViewComponent,
    UserCreateComponent,
    UserEditComponent,
    ArticlesComponent,
    ArticleCreateComponent,
    ArticleEditComponent,
    ArticleViewComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
