import { Article } from './../model/article';
import { ArticleService } from './../services/article.service';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { INewArticle } from '../interface/new-article.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.css',
})
export class NewArticleComponent {
  private readonly articleService = inject(ArticleService);

  private router = inject(Router);

  readonly form = new FormGroup<INewArticle>({
    title: new FormControl<string | null>(null),

    description: new FormControl<string | null>(null),

    content: new FormControl<string | null>(null),

    favoriteCount: new FormControl<number>(0, { nonNullable: true }),

    author: new FormControl<string>('HsinYi', { nonNullable: true }),

    tags: new FormArray<FormControl<string | null>>([]),
  });

  get title(): FormControl<string | null> {
    return this.form.get('title') as FormControl<string | null>;
  }

  get description(): FormControl<string | null> {
    return this.form.get('description') as FormControl<string | null>;
  }

  get content(): FormControl<string | null> {
    return this.form.get('content') as FormControl<string | null>;
  }

  get favoriteCount(): FormControl<number> {
    return this.form.get('favoriteCount') as FormControl<number>;
  }

  get author(): FormControl<string> {
    return this.form.get('author') as FormControl<string>;
  }

  get tags(): FormArray<FormControl<string | null>> {
    return this.form.get('tags') as FormArray<FormControl<string | null>>;
  }

  onSave(): void {
    const article = new Article({
      title: this.title.value!,
      description: this.description.value!,
      content: this.content.value!,
      favoriteCount: this.favoriteCount.value,
      author: this.author.value,
      createDate: new Date(),
      tags: this.tags.value.map((tag) => tag!),
    });

    this.articleService
      .add(article)
      .subscribe(() => this.router.navigate(['/']));
  }
}
