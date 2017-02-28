import {Component} from '@angular/core';

@Component({
  selector: 'banner',
  template: require('./banner.html'),
  styles: [String(require('./banner.less'))]
})
export class BannerComponent {}
