import { DatePipe } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-article-meta',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './article-meta.component.html',
  styleUrl: './article-meta.component.css',
})
export class ArticleMetaComponent {
  @Input()
  author!: string;

  @Input()
  createDate!: Date;

  @HostBinding('class')
  class = 'article-meta';
}
