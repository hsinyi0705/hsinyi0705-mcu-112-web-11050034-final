import { AsyncPipe } from '@angular/common';
import { Component, HostBinding, inject, Input } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  merge,
  mergeMap,
  skip,
  switchMap,
  take,
  tap,
  toArray,
} from 'rxjs';

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

  page$ = new BehaviorSubject<number>(1);

  @HostBinding('class')
  class = 'article-preview';

  totalCount!: number;

  articles$ = merge(
    this.page$.pipe(tap((data) => console.log(data))),
    this.authorTarget$
  ).pipe(
    tap((data) => console.log(data)),
    map(() => (this.authorTarget === 'user' ? this.author : undefined)),
    switchMap(() =>
      this.articleService.getList(
        this.authorTarget === 'user' ? this.author : undefined
      )
    ),
    tap((articles) => (this.totalCount = articles.length)),
    mergeMap((articles) => articles),
    skip(2 * (this.page$.value - 1)),
    take(2),
    toArray()
  );

  onPageChange({ size, index }: { size: number; index: number }): void {
    //console.log(index);
    this.page$.next(index);
  }
}
