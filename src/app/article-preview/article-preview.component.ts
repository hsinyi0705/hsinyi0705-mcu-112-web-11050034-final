import { NgFor } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [TagListComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent {
  @HostBinding('class') class = 'article-preview';

  tags = ['enim', 'repellat', 'exercitationem', 'est'];
}
