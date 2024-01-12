import { AsyncPipe } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-tag-sidebar',
  standalone: true,
  imports: [AsyncPipe, TagListComponent],
  templateUrl: './tag-sidebar.component.html',
  styleUrl: './tag-sidebar.component.css',
})
export class TagSidebarComponent {
  private readonly articleService = inject(TagService);

  @HostBinding('class') class = 'tag-sidebar';

  tags$ = this.articleService.getList();
}
