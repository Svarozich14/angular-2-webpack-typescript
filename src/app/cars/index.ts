import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { FormsModule }  from '@angular/forms';

import {CarsComponent} from './cars';
import {ArticleComponent} from './carArticle';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    CarsComponent,
    ArticleComponent
  ],
  exports: [
    CarsComponent
  ]
})
export class CarsModule {}
