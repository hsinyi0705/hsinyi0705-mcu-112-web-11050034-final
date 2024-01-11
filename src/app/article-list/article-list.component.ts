import { Component, HostBinding } from '@angular/core';

import { ArticlePreviewComponent } from '../article-preview/article-preview.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticlePreviewComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  @HostBinding('class') class = 'article-list';
}
