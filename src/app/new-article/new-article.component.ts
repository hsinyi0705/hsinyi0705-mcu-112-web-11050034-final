import { NgIf, NgFor } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { INewArticle } from '../interface/new-article.interface';
import { Article } from './../model/article';
import { ArticleService } from './../services/article.service';

@Component({
  selector: 'app-new-article',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.css',
})
export class NewArticleComponent implements OnChanges {
  private readonly articleService = inject(ArticleService);

  private router = inject(Router);

  @Input()
  id?: string;

  @Input()
  article!: Article;

  readonly form = new FormGroup<INewArticle>({
    title: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['article']) {
      this.onAddTag(this.article?.tags.length);
      this.form.patchValue(this.article!);
    }
  }

  onAddTag(count = 1): void {
    for (let i = 0; i <= count - 1; i++) {
      this.tags.push(
        new FormControl<string | null>(null, {
          validators: [Validators.required],
        })
      );
    }
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

    const action$ = this.id
      ? this.articleService.update(this.id, article)
      : this.articleService.add(article);
    action$.subscribe(() => this.router.navigate(['/']));
  }
}
