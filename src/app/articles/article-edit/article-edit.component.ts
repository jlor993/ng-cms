import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  article: Article;
  errors: any = [];
  errorMessage: string;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getArticle(id);
  }

  getArticle(id): void {
    this.articleService.getArticle(id).subscribe(
      (response:any) => {
        this.article = response.article
      }
    );
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
    this.articleService.editArticle(this.article).subscribe(
      (response) => {
        this.response(response)
      }
    );
  }

}