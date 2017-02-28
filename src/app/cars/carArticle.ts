import {Component, Input} from '@angular/core';
import {Article} from './cars';

@Component({
  selector: 'article',
  template: require('./carArticle.html'),
  styles: [String(require('./carArticle.less'))]
})
export class ArticleComponent {
  @Input() public article: Article;
}
