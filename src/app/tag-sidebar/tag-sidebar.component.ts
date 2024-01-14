import { AsyncPipe } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';

import { TagService } from '../services/tag.service';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-tag-sidebar',
  standalone: true,
  imports: [AsyncPipe, TagListComponent],
  templateUrl: './tag-sidebar.component.html',
  styleUrl: './tag-sidebar.component.css',
})
export class TagSidebarComponent {
  private readonly tagService = inject(TagService);

  @HostBinding('class') class = 'tag-sidebar';

  tags$ = this.tagService.getList();
}
