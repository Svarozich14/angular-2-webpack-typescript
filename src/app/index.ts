import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';

import {CarsModule} from './cars';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {BannerComponent} from './banner';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states: STATES, configClass: MyUIRouterConfig}),
    CarsModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
