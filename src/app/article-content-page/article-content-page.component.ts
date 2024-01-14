import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Article } from '../model/article';

@Component({
  selector: 'app-article-content-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-content-page.component.html',
  styleUrl: './article-content-page.component.css',
})
export class ArticleContentPageComponent {
  @Input()
  article!: Article;
}
