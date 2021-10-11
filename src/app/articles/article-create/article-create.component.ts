import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  article = new Article();
  // errors: Array<any> = [];
  errors: any = [];
  errorMessage: string;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
  }

  response(response): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true){
      this.router.navigate(['/articles/view/', response.article._id]);
    }
  }

  onSubmit(): void {
    this.articleService.createArticle(this.article).subscribe(
      (response) => {
        this.response(response)
      }
    );
  }

}