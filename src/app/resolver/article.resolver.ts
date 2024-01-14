import { state } from '@angular/animations';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { Article } from '../model/article';
import { ArticleService } from './../services/article.service';

export const articleResolver: ResolveFn<Article> = (
  route,
  state,
  articleService = inject(ArticleService)
) => {
  const id = route.paramMap.get('id')!;
  return articleService.getById(id);
};
