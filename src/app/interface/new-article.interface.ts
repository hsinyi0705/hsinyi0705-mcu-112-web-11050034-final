import { FormArray, FormControl } from '@angular/forms';

export interface INewArticle {
  title: FormControl<string | null>;

  description: FormControl<string | null>;

  content: FormControl<string | null>;

  favoriteCount: FormControl<number>;

  author: FormControl<string>;

  tags: FormArray<FormControl<string | null>>;
}
