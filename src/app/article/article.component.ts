import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { TagListComponent } from '../tag-list/tag-list.component';
import { Article } from './../model/article';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [DatePipe, FavoriteButtonComponent, TagListComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input({ required: true })
  article!: Article;
}
