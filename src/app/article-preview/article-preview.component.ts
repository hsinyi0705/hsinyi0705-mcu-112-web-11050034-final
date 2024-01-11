import { DatePipe, NgFor } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

import { TagListComponent } from '../tag-list/tag-list.component';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { Article } from '../model/article';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent {
  @HostBinding('class') class = 'article-preview';

  article = new Article({
    id: 1,

    title:
      'Ill quantify the redundant TCP bus, that should hard drive the ADPbandwidth!',

    content: `Aut facilis qui. Cupiditate sit ratione eum sunt rerum impedit. Qui suscipit
    debitis et et voluptates voluptatem voluptatibus. Quas voluptatum quae
    corporis corporis possimus.`,

    favoriteCount: 30,

    author: 'Maksim Esteban',

    createDate: new Date(2024, 6, 4),

    tags: ['enim', 'repellat', 'exercitationem', 'est'],
  });
}
