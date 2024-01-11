import { Component } from '@angular/core';

import { ArticleListComponent } from '../article-list/article-list.component';
import { TagSidebarComponent } from '../tag-sidebar/tag-sidebar.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ArticleListComponent, TagSidebarComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
