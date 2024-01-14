import { JsonPipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-article-tab',
  standalone: true,
  imports: [],
  templateUrl: './article-tab.component.html',
  styleUrl: './article-tab.component.css',
})
export class ArticleTabComponent {
  @Input({ required: true })
  selectedTab!: 'user' | 'global';

  @Output()
  selectedTabChange = new EventEmitter<'user' | 'global'>();

  @HostBinding('class') class = 'article-tab';

  onSelect(target: 'user' | 'global'): void {
    this.selectedTab = target;
    this.selectedTabChange.emit(target);
  }
}
