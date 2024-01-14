import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ArticleContentPageComponent } from './article-content-page/article-content-page.component';
import { articleResolver } from './resolver/article.resolver';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'home', component: HomePageComponent },
  { path: 'new_article', component: NewArticleComponent },
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  {
    path: 'article/content/:id',
    component: ArticleContentPageComponent,
    resolve: { article: articleResolver },
  },
];
