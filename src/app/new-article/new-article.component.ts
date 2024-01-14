import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { INewArticle } from '../interface/new-article.interface';

@Component({
  selector: 'app-new-article',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.css',
})
export class NewArticleComponent {
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

  get tags(): FormArray<FormControl<string | null>> {
    return this.form.get('tags') as FormArray<FormControl<string | null>>;
  }
}
