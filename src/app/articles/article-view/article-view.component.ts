import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) { }

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

  deleteArticle(id: string): void {
    if(confirm("Are you sure to delete " + this.article.title)) {
      this.articleService.deleteArticle(id).subscribe(
        ()=>{this.router.navigate(['/articles'])}
      );
    }
  }

}