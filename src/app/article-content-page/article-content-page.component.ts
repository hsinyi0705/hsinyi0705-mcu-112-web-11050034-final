import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Article } from '../model/article';
import { ArticleMetaComponent } from '../article-meta/article-meta.component';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-article-content-page',
  standalone: true,
  imports: [ArticleMetaComponent, TagListComponent],
  templateUrl: './article-content-page.component.html',
  styleUrl: './article-content-page.component.css',
})
export class ArticleContentPageComponent {
  @Input()
  article!: Article;
}
