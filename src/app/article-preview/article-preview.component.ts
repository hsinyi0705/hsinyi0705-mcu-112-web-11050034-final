import { AsyncPipe } from '@angular/common';
import { Component, HostBinding, inject, Input } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';

import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleService } from './../services/article.service';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [AsyncPipe, ArticleListComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent {
  private readonly articleService = inject(ArticleService);

  private readonly author = 'HsinYi';

  private authorTarget$ = new BehaviorSubject<'user' | 'global'>('global');

  @Input({ required: true })
  set authorTarget(value: 'user' | 'global') {
    this.authorTarget$.next(value);
  }
  get authorTarget(): 'user' | 'global' {
    return this.authorTarget$.value;
  }

  @HostBinding('class')
  class = 'article-preview';

  articles$ = this.authorTarget$.pipe(
    map((target) => (target === 'user' ? this.author : undefined)),
    switchMap((target) => this.articleService.getList(target))
  );
}
