import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: require('./footer.html'),
  styles: [String(require('./footer.less'))]
})
export class FooterComponent {}
