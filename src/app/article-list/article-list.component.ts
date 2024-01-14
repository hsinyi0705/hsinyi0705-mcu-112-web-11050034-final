import { Component, HostBinding, Input } from '@angular/core';

import { ArticleComponent } from '../article/article.component';
import { Article } from '../model/article';
import { NgFor } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [NgFor, ArticleComponent, PaginationComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  @HostBinding('class')
  class = 'article-list';

  @Input({ required: true })
  articles!: Article[] | null;
}
