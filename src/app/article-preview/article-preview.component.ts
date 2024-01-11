import { Component, HostBinding } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [NgFor, TagComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent {
  @HostBinding('class') class = 'article-preview';

  tags = ['enim', 'repellat', 'exercitationem', 'est'];
}
