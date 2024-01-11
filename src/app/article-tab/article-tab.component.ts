import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article-tab',
  standalone: true,
  imports: [],
  templateUrl: './article-tab.component.html',
  styleUrl: './article-tab.component.css',
})
export class ArticleTabComponent {
  @HostBinding('class') class = 'article-tab';
}
