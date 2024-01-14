export class Article {
  constructor(initData?: Partial<Article>) {
    Object.assign(this, initData);
  }

  id!: string;

  title!: string;

  description!: string;

  content!: string;

  favoriteCount!: number;

  author!: string;

  createDate!: Date;

  tags!: string[];
}
