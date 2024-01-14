import { DatePipe } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { TagListComponent } from '../tag-list/tag-list.component';
import { Article } from './../model/article';
import { Router, RouterLink } from '@angular/router';
import { ArticleMetaComponent } from '../article-meta/article-meta.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    TagListComponent,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input({ required: true })
  article!: Article;

  @HostBinding('class')
  class = 'article';
}
