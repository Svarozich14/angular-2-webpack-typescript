import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: require('./header.html'),
  styles: [String(require('./header.less'))]
})
export class HeaderComponent {}
