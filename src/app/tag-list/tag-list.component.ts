import { Component, HostBinding } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [NgFor, TagComponent],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css',
})
export class TagListComponent {
  @HostBinding('class') class = 'tag-list';

  tags = [
    'enim',
    'repellat',
    'exercitationem',
    'est',
    'eos',
    'quia',
    'facilis',
    'consequatur',
    'occaecati',
    'tenetur',
  ];
}
