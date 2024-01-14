import { routes } from './../app.routes';
import { ArticleService } from './../services/article.service';
import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

import { Article } from '../model/article';
import { ArticleMetaComponent } from '../article-meta/article-meta.component';
import { TagListComponent } from '../tag-list/tag-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-content-page',
  standalone: true,
  imports: [ArticleMetaComponent, TagListComponent],
  templateUrl: './article-content-page.component.html',
  styleUrl: './article-content-page.component.css',
})
export class ArticleContentPageComponent {
  private readonly articleService = inject(ArticleService);

  private readonly router = inject(Router);

  @Input()
  article!: Article;

  onEdit(): void {
    this.router.navigate(['new_article', this.article.id]);
  }

  onDelete(): void {
    this.articleService
      .delete(this.article.id)
      .subscribe(() => this.router.navigate(['/']));
  }
}
